import { combineReducers } from 'redux'
import cakeReducer from '../cakes/cakeReducer'
import icecreamReducer from '../icecream/icecreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

export default rootReducer