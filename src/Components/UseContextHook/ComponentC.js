import React, { useContext } from 'react';
import { UserContext, EmailContext } from '../../App';



function ComponentC() {

    const user = useContext(UserContext)
    const email = useContext(EmailContext)

    return (
        <div>
            <h2>User Name : {user} </h2>
            <h2>Email ID : {email} </h2>
        </div>
    )
}

export default ComponentC