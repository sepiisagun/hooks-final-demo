import { useState } from 'react';
import { createTodos } from '../components/utils';
import MemoTodoList from '../components/MemoTodoList';
import RegularTodoList from '../components/RegularTodoList';

const todos = createTodos();

function MemoPage({ type }) {
	const [tab, setTab] = useState('all');
	const [isDark, setIsDark] = useState(false);
	return (
		<div className="container">
			<h6>Uses {type} function</h6>
			<div className="container">
				<button
					onClick={() => setTab('all')}
					type="button"
					class="btn btn-secondary m-1"
				>
					All
				</button>
				<button
					onClick={() => setTab('active')}
					type="button"
					class="btn btn-secondary m-1"
				>
					Active
				</button>
				<button
					onClick={() => setTab('completed')}
					type="button"
					class="btn btn-secondary m-1"
				>
					Completed
				</button>
			</div>
			<br />

			<div class="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					id="flexCheckDefault"
					checked={isDark}
					onChange={(e) => setIsDark(e.target.checked)}
					onClick={console.log('theme color rendered')}
				/>
				<label class="form-check-label" for="flexCheckDefault">
					Dark Mode
				</label>
			</div>

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
		<div className="container">
			<div className="card">
				<div className="card-body">
					<h1>useMemo Demo</h1>
					<div className="row">
						<div className="col">
							<div className="card">
								<div className="card-body">
									<MemoPage type="Memo" />
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<MemoPage type="Regular" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UseMemo;
