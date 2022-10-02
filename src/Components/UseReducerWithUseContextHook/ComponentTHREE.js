import React, { useContext } from 'react'
import { CountContext } from '../../App'


function ComponentTHREE() {
    const count = useContext(CountContext)

    return (
        <div>
            <h2> Component Three Counter : {count.countState} </h2>
            <button onClick={() => count.countDispatch('increment')}>Increment</button>
            <button onClick={() => count.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => count.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentTHREE