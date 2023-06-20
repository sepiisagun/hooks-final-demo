import { useRef, useState } from 'react';

function UseRef() {
	const [state, setState] = useState(0);
	const counter = useRef(0);

	const increaseCounter = () => {
		counter.current = counter.current + 1;
		console.log(counter.current);
	};
	return (
		<div className="container">
			<div className="card">
				<div className="card-body text-center">
					<h1>useRef Demo</h1>
					<h2>Ref: {counter.current}</h2>
					<h3>State: {state}</h3>
					<div className="container">
						<button
							className="btn btn-primary m-1"
							onClick={increaseCounter}
							type="button"
						>
							Increase Ref
						</button>
						<button
							className="btn btn-secondary m-1"
							onClick={() => setState(state + 1)}
							type="button"
						>
							Increase State
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UseRef;
