import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const allReducers = combineReducers({ reducer });
const store = configureStore({
    reducer: allReducers
});

export default store;
