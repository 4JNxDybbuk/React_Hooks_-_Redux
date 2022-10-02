import React, { useState, useMemo } from 'react'

function UseMemoHook() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    
    // useMemo hook make functional componets as pure components
    const isEven = useMemo(() => {
        console.log('Even method triggered!')
        return counterOne % 2 === 0
    },[counterOne])

    return (
        <div>
            <h2>Counter One - {counterOne} is  {isEven ? "Even" : "Odd"} </h2> <span> </span>
            <button onClick={incrementOne}>CounterOne</button>
            <h2>Counter One - {counterTwo} </h2>
            <button onClick={incrementTwo}>CounterTwo</button>
        </div>
    )
}

export default UseMemoHook