import { GET_ALL_CITIES } from '../utils/constants';

export default function(state = [], action) {
    switch (action.type) {
        case GET_ALL_CITIES:
            return action.cities;
        default:
            return state;
    }
}