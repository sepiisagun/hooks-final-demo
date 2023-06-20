import { filterTodos } from './utils';

function RegularTodoList({ todos, theme, tab, type }) {
	const visibleTodos = filterTodos(todos, tab, type);
	return (
		<div
			style={{
				background: `${theme}`,
				color: `${theme === 'black' ? 'white' : 'black'}`,
			}}
		>
			<ul>
				{visibleTodos.map((todo) => (
					<li key={todo.id}>
						{todo.completed ? <s>{todo.text}</s> : todo.text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default RegularTodoList;
