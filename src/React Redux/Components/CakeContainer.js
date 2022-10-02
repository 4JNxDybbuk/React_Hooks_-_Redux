import React from 'react'
import { buyCake } from '../cakes/cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Numbers Of Cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapsStatetoProps, mapDispatchtoProps)(CakeContainer)