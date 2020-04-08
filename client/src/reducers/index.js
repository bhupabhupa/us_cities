import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import citiesReducer from './citiesReducer';

export default combineReducers({
    city: cityReducer,
    cities: citiesReducer
});