import React, { useState } from 'react'
import useUserHook from './useUserHook'

function UserForm() {

    // custom hook used..s
    const [firstName, bindFirstName, resetFirstName] = useUserHook('')
    const [lastName, bindLastName, resetLastName] = useUserHook('')

    const submitUserForm = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitUserForm}>
                <div>
                    <lable>First Name</lable>
                    <input {...bindFirstName} type='text' />
                </div>

                <div>
                    <lable>Last Name</lable>
                    <input {...bindLastName} type='text' />
                </div>

                <button type='submit'>Click Me</button>
            </form>
        </div>
    )
}

export default UserForm