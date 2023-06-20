import React, { useReducer } from 'react'

function Reducer(state, action) {
    switch (action) {
        case 'plus':
            if (state.width <= 1202) {
                return { width: state.width + 100};
            } else return { width: state.width };
        case 'minus':
            return { width: Math.max(state.width - 100, 2)};
        default:
            throw new Error("What's going on?");
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(Reducer, { width: 2 })
  return (
    <div className='container mt-5'>
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
					className="progress-bar"
					style={{ width: state.width }}
				></div>
			</div>
        <div className="mt-3 d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-warning"
					onClick={() => dispatch('plus')}
				>
					Increase Bar Size
				</button>
			</div>
            <div className="mt-3 d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-warning"
					onClick={() => dispatch('minus')}
				>
					Decrease Bar Size
				</button>
			</div>
    </div>
  )
}

export default UseReducer