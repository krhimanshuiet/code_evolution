// import {legacy_createStore} from 'redux'

//redux 
const redux = require('redux')
const bindActionCreaters = redux.bindActionCreators
const legacy_createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
const applyMiddleware  = redux.applyMiddleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty=1) {
  return {
    type: CAKE_RESTOCKED,
    payload:qty
  }
}

function orderIceCream(qty=1) {
  return {
    type: ICECREAM_ORDERED,
    payload:qty,
  };
}

function restockIceCream(qty=1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload:qty
  }
}
// (prevState , action) => newState
const initialCakeState = {
    numOfCakes:10,
    anotherProperty:10,
}

const initialIceCreamState = {
  numOfIceCream:10,
  anotherProperty:0
}
const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case CAKE_ORDERED: return {...state,numOfCakes:state.numOfCakes-1};
        case CAKE_RESTOCKED:return {...state,numOfCakes:state.numOfCakes+action.payload}
        // case ICECREAM_ORDERED: return {...state,numOfIceCream:state.numOfIceCream - action.payload};
        // case ICECREAM_RESTOCKED:return {...state,numOfIceCream:state.numOfIceCream + action.payload}
        default:return state
    }
}

const iceCreamReducer = (state = initialIceCreamState , action) => {
  switch(action.type){
      case ICECREAM_ORDERED: return {...state,numOfIceCream:state.numOfIceCream - action.payload};
      case ICECREAM_RESTOCKED:return {...state,numOfIceCream:state.numOfIceCream + action.payload}
      default:return state
  }
}

// redux store

const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})
const store = legacy_createStore(rootReducer,applyMiddleware(logger));
console.log('initial store' , store.getState());
const unsubscribe = store.subscribe(() => {})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
// store.dispatch(restockCake())
// store.dispatch(restockCake())

const actions = bindActionCreaters({orderCake , restockCake , orderIceCream,restockIceCream} , store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderIceCream(1)
actions.orderIceCream(1)
actions.orderIceCream(2)
actions.orderIceCream(4)
actions.restockCake(3)
actions.restockIceCream(3)

unsubscribe()
