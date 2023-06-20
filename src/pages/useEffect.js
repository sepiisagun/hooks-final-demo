import React, { useEffect, useReducer, useState } from 'react';

function Reducer(state, action) {
	// this is for incrementing the progress bar
	switch (action) {
		case 'plus':
			let maxWidth = state.width;
			if (maxWidth < 1300) {
				maxWidth += 162.5;
			}
			return { width: maxWidth };
		default:
			throw new Error("what's going on?");
	}
}

function UseEffect() {
	const [state, dispatch] = useReducer(Reducer, { width: 0 });
	const [color, setColor] = useState([]);

	useEffect(() => {
		if (state.width === 325) {
			setColor([...color, 'btn-secondary']);
		} else if (state.width === 650) {
			setColor([...color, 'btn-primary']);
		} else if (state.width === 975) {
			setColor([...color, 'btn-success']);
		} else if (state.width === 1300) {
			setColor([...color, 'btn-danger']);
		}
	}, [state]); // based on the state, the side effect is that the circles should change colors depending on the current state value
	return (
		<div className="container mt-5">
			<div class="progress-stacked br">
				<div
					class="progress"
					role="progressbar"
					aria-label="Segment one"
					aria-valuenow="15"
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ width: '390px' }}
				>
					<div class="progress-bar bg-secondary"></div>
				</div>
				<div
					class="progress"
					role="progressbar"
					aria-label="Segment two"
					aria-valuenow="30"
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ width: '390px' }}
				>
					<div class="progress-bar bg-primary"></div>
				</div>
				<div
					class="progress"
					role="progressbar"
					aria-label="Segment three"
					aria-valuenow="20"
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ width: '390px' }}
				>
					<div class="progress-bar bg-success"></div>
				</div>
				<div
					class="progress"
					role="progressbar"
					aria-label="Segment three"
					aria-valuenow="20"
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ width: '390px' }}
				>
					<div class="progress-bar bg-danger"></div>
				</div>
			</div>
			<div
				className="progress"
				role="progressbar"
				aria-label="Basic example"
				aria-valuenow="50"
				aria-valuemin="0"
				aria-valuemax="100"
				style={{ height: '48px' }}
			>
				<div
					className="progress-bar progress-bar-striped progress-bar-animated"
					style={{ width: state.width }}
				></div>
			</div>
			<div className="mt-3 d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-warning"
					onClick={() => dispatch('plus')}
				>
					Increase Progress
				</button>
			</div>
			<div className="mt-5 d-flex justify-content-center">
				<button
					type="button"
					className={`btn ${color[0]} rounded-circle`}
					disabled
					style={{
						height: '256px',
						width: '256px',
					}}
				></button>
				<button
					type="button"
					className={`btn ${color[1]} rounded-circle`}
					disabled
					style={{ height: '256px', width: '256px' }}
				></button>
				<button
					type="button"
					className={`btn ${color[2]} rounded-circle`}
					disabled
					style={{ height: '256px', width: '256px' }}
				></button>
				<button
					type="button"
					className={`btn ${color[3]} rounded-circle`}
					disabled
					style={{ height: '256px', width: '256px' }}
				></button>
			</div>
		</div>
	);
}

export default UseEffect;
