import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // we add dependencies to ensure that useEffect hook is only called when name state update.
    useEffect(() => {
        document.title = `You Clicked ${count} times`
        console.log('Use Effect Hook Called!')
    },[name])

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <br></br>
            <input onChange={e => setName(e.target.value)} value={name} />
        </div>
    )
}

export default UseEffectHook