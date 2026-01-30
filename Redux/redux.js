const redux = require('redux');
const redux_logger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


const logger = redux_logger.createLogger();

const applyMiddleware = redux.applyMiddleware;



//defining actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action is an object that has type property and its value is a string constant

// {
//     type: BUY_CAKE,
//     info: 'this action is to buy cake'
// }


//action creator -> these are functions that return action
function buyCake(quantity = 1){
    return{
        type: BUY_CAKE,
        payload: quantity
    }
}

function buyIcecream(quantity = 1){
    return{
        type: BUY_ICECREAM,
        payload: quantity
    }
}


// defining initial state fro reducers
const icecreamInitialState = {
    numOfIcecream: 20
}
const cakeInitialState = {
    numOfCakes: 10
}


const IcecreamReducer = (state = icecreamInitialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state, numOfIcecream: state.numOfIcecream - 1
        }
        case BUY_CAKE: return{
            ...state, numOfIcecream: state.numOfIcecream - 1
        }
        default: return state
    }
}
const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IcecreamReducer
});


//createStore is a method that takes reducer as arg to create store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initialState", store.getState());

//subscribe method takes listener(callback) as arg and it will be executed everytime the state changes
// let unsubscribe = store.subscribe(() => console.log(store.getState()));

//dispatching action
// store.dispatch(buyCake(2));
// store.dispatch(buyCake(2));
store.dispatch(buyCake(1));

// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());

// unsubscribe();

//here even though we hace 2 seperate reducers, when we dispatch an action both of these reduser recieve that action
// one 