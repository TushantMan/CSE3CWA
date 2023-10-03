import { useState } from 'react';
import './List.css';

function Task(props) {

	console.log(props);

	function onClick() {
		// Find the task we want to delete and remove it
		fetch(`http://localhost:5002/api/tasks/${props.id}`, {
			method: 'DELETE'
		})
		.then(() => {
			props.setTasks(tasks => tasks.filter(task => task.id !== props.id));
		
		})
		.catch((error) => {
			console.error('Error:', error);
		}
		);	
	}

	return (
		<div className='contactDetails'>
		<div className='contactName'>{ props.description }<button type="button" onClick={onClick} className='delete-1'>Delete</button></div>
		</div>
	);
}

function List(props) {

	const [newTask, setNewTask] = useState("");

	function onChange(event) {
		setNewTask(event.target.value);
	}

	function onClick() {
		fetch('http://localhost:5002/api/tasks', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({ description: newTask, completed: false })
		})
			.then(response => response.json())
			.then(data => {
				props.setTasks(tasks => [...tasks, data]);
			})
		.catch((error) => {
			console.error('Error:', error);
			});
			setNewTask(""); // Clear the input field
		}

	return (
		<div>
			<header className="App-header">
			<h1 className='Header'>Contractor</h1>
			<form className='mainForm'>
			<h2 className='firstLabel'>Contacts</h2><br></br>
			<input type="text" className= "contractorInput" placeholder="Add a new contact" onChange={onChange} />
			<button type="button" onClick={onClick} className='primaryButton'>Add</button>
				{ props.tasks.map(task => <Task setTasks={props.setTasks} id={task.id} description={task.description}/>) }
				<div className='line-1'>
				</div>
			</form>
			<div className='contractorMessage'>
			<h2 className='secondLabel'>Click a contact to view assocoated phone numbers</h2><br></br>
			</div>
			</header>
		</div>
	);
}

export default List;
