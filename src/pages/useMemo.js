import { useState } from 'react';
import { createTodos } from '../components/utils';
import MemoTodoList from '../components/MemoTodoList';
import RegularTodoList from '../components/RegularTodoList';

const todos = createTodos();

function MemoPage({ type }) {
	const [tab, setTab] = useState('all');
	const [isDark, setIsDark] = useState(false);
	return (
		<div className='container'>
			<h6>Uses {type} function</h6>
			<div className="container">
				<button onClick={() => setTab('all')} type="button" class="btn">
					All
				</button>
				<button
					onClick={() => setTab('active')}
					type="button"
					class="btn"
				>
					Active
				</button>
				<button
					onClick={() => setTab('completed')}
					type="button"
					class="btn"
				>
					Completed
				</button>
			</div>
			<br />
			<label>
				<input
					type="checkbox"
					checked={isDark}
					onChange={(e) => setIsDark(e.target.checked)}
				/>
				Dark mode
			</label>
			<hr />
			{type === 'Memo' ? (
				<MemoTodoList
					todos={todos}
					tab={tab}
					theme={isDark ? 'black' : 'white'}
				/>
			) : (
				<RegularTodoList
					todos={todos}
					tab={tab}
					theme={isDark ? 'black' : 'white'}
					type={type}
				/>
			)}
		</div>
	);
}

function UseMemo() {
	return (
		<div className='container'>
			<MemoPage type="Memo" />
			<MemoPage type="Regular" />
		</div>
	);
}

export default UseMemo;
