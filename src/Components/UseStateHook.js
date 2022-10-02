import React, { useState } from 'react'

function UseStateHook() {
    const initialVal = 0
    const [count, setCount] = useState(initialVal)

    const incrementBy5 = () => {
        for (var i = 0; i < 5; i++) {
            // prev keyword is used to hold previouse state value .
            setCount(prevCount => prevCount+1)
        }
    }
    return (
        <div>
            <h2> Counter: {count}</h2>
            <button onClick={()=> setCount(initialVal)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementBy5}>IncrementBy5</button>
        </div>
    )
}

export default UseStateHook