import {applyMiddleware, combineReducers, createStore} from "redux"
import cakeReduser from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
    cake: cakeReduser,
    icecream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));


export default store;