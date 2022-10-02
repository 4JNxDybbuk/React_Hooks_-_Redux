import React, { useEffect, useState } from 'react'

function UseEffectHookThree() {
    const [count, setCount] = useState(0)

    const timer = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(timer, 1000)

        // useEffect hook returns an function which is used for clear interval.
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            <h2> Timer: {count}</h2>
        </div>
    )
}

export default UseEffectHookThree