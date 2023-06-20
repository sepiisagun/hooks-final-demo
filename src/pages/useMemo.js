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
				<button onClick={() => setTab('all')} type="button" class="btn btn-secondary">
					All
				</button>
				<button
					onClick={() => setTab('active')}
					type="button"
					class="btn btn-secondary "
				>
					Active
				</button>
				<button
					onClick={() => setTab('completed')}
					type="button"
					class="btn btn-secondary"
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
					onClick={console.log('clicked')} //added console log
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
				/>
			)}
		</div>
	);
}

function UseMemo() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<MemoPage type="Memo" />
				</div>
				<div className='col'>
					<MemoPage type="Regular" />
				</div>
			</div>
		</div>
	);
}

export default UseMemo;
