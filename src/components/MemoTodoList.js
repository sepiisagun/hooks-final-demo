import { useMemo } from 'react';
import { filterTodos } from './utils';

function MemoTodoList({ todos, theme, tab }) {
	const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
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

export default MemoTodoList;
