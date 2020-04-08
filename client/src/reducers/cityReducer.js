import {GET_CITY, CLEAR_CITY} from '../utils/constants';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CITY:
            return action.city;
        case CLEAR_CITY:
            return action.city;
        default:
            return state;
    }
}