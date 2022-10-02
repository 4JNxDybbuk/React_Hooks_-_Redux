import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

function HookTwo() {
    
    // custom hook
    const [count, increment, decrement, reset] = useCustomHook(10 , 5)

    return (
        <div>
            <h2>Hook Two  Counter = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default HookTwo