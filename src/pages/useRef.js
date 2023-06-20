import { useRef, useState } from 'react';

function UseRef() {
	const [state, setState] = useState(0);
	const counter = useRef(0);

	const increaseCounter = () => {
		counter.current = counter.current + 1;
		console.log(counter.current);
	};
	return (
		<div>
			<h1>Learn about useRef!</h1>
			<h2>Ref: {counter.current}</h2>
			<h3>State: {state}</h3>
			<div>
				<button onClick={increaseCounter} type="button" class="btn">
					Increase Ref
				</button>
				<button onClick={() => setState(state + 1)} type="button" class="btn">
					Increase State
				</button>
			</div>
		</div>
	);
}

export default UseRef;
