import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 5
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState , firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState , firstCounter: currentState.firstCounter - action.value }
        case 'increment2':
            return { ...currentState , secondCounter: currentState.secondCounter + action.value }
        case 'decrement2':
            return { ...currentState , secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return currentState
    }
}


function UseReducerHookTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>First Counter : {count.firstCounter} </h2>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment By 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement By 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <br /><br />
            <h2>Second Counter: {count.secondCounter} </h2>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Second Increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Second Decrement</button>
        </div>
    )
}

export default UseReducerHookTwo
