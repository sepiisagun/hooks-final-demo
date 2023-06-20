import { createContext, useState } from 'react';
import ContextChild1 from '../components/ContextChild1';
import ContextChild2 from '../components/ContextChild2';

export const MainContext = createContext({ value: 'test' });

function ContextParent1() {
	return (
		<div className="card bg-light text-dark">
			<div className="card-body fw-bold">Main Component 1</div>
			<div className="card-body">
				<ContextChild1 />
			</div>
		</div>
	);
}

function ContextParent2() {
	return (
		<div className="card mt-2 bg-light text-dark">
			<div className="card-body fw-bold">Main Component 2</div>
			<div className="card-body">
				<ContextChild2 />
			</div>
		</div>
	);
}

function UseContext() {
	const [darkTheme, setDarkTheme] = useState(true);
	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}
	return (
		<MainContext.Provider value={darkTheme}>
			<div className="container">
				<div className="card">
					<div className="card-body">
						<h1>useContext Demo</h1>
						<button
							className="btn btn-primary mb-2"
							onClick={toggleTheme}
						>
							Toggle Theme
						</button>
						<div className="card">
							<div className="card-body fw-bold bg-secondary text-white">
								Container
								<div className="card-body">
									<ContextParent1 />
									<ContextParent2 />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainContext.Provider>
	);
}

export default UseContext;
