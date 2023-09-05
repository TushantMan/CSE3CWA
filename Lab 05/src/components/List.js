import { useState } from 'react';
function Task(props) {
	console.log(props);
	function onChange(){
		props.setTasks(tasks => tasks.map(task => {
			if (task.id === props.id) {
				return {
					id: task.id,
					description: task.description,
					completed: !task.completed
				};
			} else {
				return task;
			}
		}));
	}
	function onClick() {
		props.setTasks(tasks => tasks.filter(task => task.id !== props.id));
	}
	return (
		<li>
			<button type='button' onClick={onClick}> X </button>
			{ props.description }
			<input type='checkbox' checked={props.completed} onChange={onChange} />
			
		</li>
	);
}

function List(props) {
	const [newTask, setNewTask] = useState('');
	function onChange(event) {
		setNewTask(event.target.value);
	}
	function onClick(){
		props.setTasks(tasks => [...tasks,{
			id: tasks.length + 1,
			description: newTask,
			completed: false
		}]);
	}


	return (
		<div>
			<h1>{ props.heading }</h1>
			<b>Add Task</b><br></br>
			<input type='text' placeholder='Add a New Task' onChange={onChange} />
			<button type='button' onClick={onClick}>Add</button>
			<ul>
				{ props.tasks.map(task => <Task  setTasks={props.setTasks}
				id={task.id}
				description={task.description}
				completed={task.completed}
				/>)
				}
			</ul>
		</div>
	);
}

export default List;
