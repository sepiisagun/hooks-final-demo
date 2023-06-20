export function createTodos() {
	const todos = [];
	for (let i = 0; i < 50; i++) {
		todos.push({
			id: i,
			text: 'Todo ' + (i + 1),
			completed: Math.random() > 0.5,
		});
	}
	return todos;
}

export function filterTodos(todos, tab) {
	let startTime = performance.now();
	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms to emulate extremely slow code
	}
	return todos.filter((todo) => {
		console.log('filter render'); //added console log
		if (tab === 'all') {
			return true;
		} else if (tab === 'active') {
			return !todo.completed;
		} else if (tab === 'completed') {
			return todo.completed;
		}
		return null;
	});
}