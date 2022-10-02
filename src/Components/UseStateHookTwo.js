import React, { useState } from 'react'

function UseStateHookTwo() {
    const [name, setName] = useState({ firstname: '', lastname: '' })

    // drawback of usestate hook , it does not automatically merge or update.

    return (
        <div>
            <input onChange={(e) => setName({ ...name, firstname: e.target.value })} value={name.firstname} />
            <input onChange={(e) => setName({ ...name, lastname: e.target.value })} value={name.lastname} />
            <h3>First Name : {name.firstname}</h3>
            <h3>Last Name  : {name.lastname}</h3>
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default UseStateHookTwo