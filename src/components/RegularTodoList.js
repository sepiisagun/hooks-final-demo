import { filterTodos } from './utils';

function RegularTodoList({ todos, theme, tab }) {
    const visibleTodos = filterTodos(todos, tab);
	return (
		<div style={{ background: `${theme}` }}>
			<ul>
				<p>
					<b>
						Note: <code>filterTodos</code> is artificially slowed
						down!
					</b>
				</p>
				{visibleTodos.map((todo) => (
					<li key={todo.id}>
						{todo.completed ? <s>{todo.text}</s> : todo.text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default RegularTodoList