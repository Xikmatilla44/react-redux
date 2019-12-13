import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';


import roodReducer from './store/index';



export default () => {

    const store = createStore(roodReducer, applyMiddleware(logger));
    return store;
};




