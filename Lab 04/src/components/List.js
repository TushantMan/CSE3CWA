function Task(props) {
	return ( 
	<li>{ props.description }<input type="checkbox" checked={props.completed} readOnly /></li>
	);
}

function List(props) {
	var taskArray = [];
	for (let i = 0; i < props.tasks.length; i++) {
		let desc = props.tasks[i].description;
		let stat = props.tasks[i].completed;
		taskArray.push(<Task description={desc} completed={stat}/>);
	}
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{ taskArray }
			</ul>
		</div>
	);	
}

export default List;
