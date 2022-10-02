import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

function HookOne() {

    // custom hook
    const [count, increment, decrement, reset] = useCustomHook(0 , 1)

    return (
        <div>
            <h2>Hook One Counter = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default HookOne