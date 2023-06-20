import React, { useReducer } from 'react'

function Reducer(state, action) {
    switch (action) {
        case 'plus':
            return { width: state.width + 15};
        case 'minus':
            return { width: Math.max(state.width - 15, 2)};
        default:
            throw new Error("What's going on?");
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(Reducer, { width: 2 })
  return (
    <div className='container' style={{ background: 'teal', height: '30px', width: state.width }}>
        <button onClick={() => dispatch('plus')} type="button" class="btn">Increase bar size</button>
        <button onClick={() => dispatch('minus')} type="button" class="btn">Decrease bar size</button>
    </div>
  )
}

export default UseReducer