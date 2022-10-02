import React, { useState } from 'react'
import { buyCake } from '../cakes/cakeAction'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number , setNumber] = useState(1)

    return (
        <div>
            <h2>Numbers Of Cakes - {props.numberOfCakes}</h2>
            <input value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={()=> props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapsStatetoProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapsStatetoProps, mapDispatchtoProps)(NewCakeContainer)