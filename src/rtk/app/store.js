// const configureStore = require('@reduxjs/toolkit').configureStore
import {configureStore} from "@reduxjs/toolkit"
// const { default: logger } = require('redux-logger');
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/iceCream/iceCreamSlice"
import userReducer from "../features/user/userSlice"
// const cakeReducer = require('../features/cake/cakeSlice')
// const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
// const userReducer = require('../features/user/userSlice')

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;


