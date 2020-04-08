import axios from 'axios';
import {GET_ALL_CITIES, GET_CITY, CLEAR_CITY} from '../utils/constants';

export const getAllCities = () => async dispatch => {
        const res = await axios.get('/api/cities');
        dispatch({ type: GET_ALL_CITIES, cities: res.data});
};

export const getCity = (city_id) => async dispatch => {
    const res = await axios.get(`/api/city/${city_id}`);
    dispatch({ type: GET_CITY, city: res.data[0]});
};

export const clearCity = () => dispatch => {
    dispatch({ type: CLEAR_CITY, city: {} });
};