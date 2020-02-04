import { LOAD_APP_ACTION, GET_USERS } from "../actions";

const initialState = {
    applicationState: 'Not loaded yet',
    users: []
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case LOAD_APP_ACTION:
            return {...state, applicationState: payload.value}
        case GET_USERS:
            return {...state, users: payload}
        default:
            return state;
    }    
}