import React, { useEffect, useState } from 'react'

function UseEffectHookTwo() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const mousePosition = e => {
        console.log("Mosuse Position method called")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect Hook Called!')
        window.addEventListener('mousemove', mousePosition)
    } ,[])
    
    return (
        <div>
            <h2>X - {X}  and Y - {Y} </h2>
        </div>
    )
}

export default UseEffectHookTwo