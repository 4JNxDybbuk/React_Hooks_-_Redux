import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
    const [timer, setTimer] = useState(0)
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

    }, [])

    return (
        <div>
            <h2>Timer -- {timer} </h2>
            <button onClick={() => clearInterval(inputRef.current)}>Stop</button>
        </div>
    )
}

export default UseRefHook