import axios from "axios";

export const LOAD_APP_ACTION = 'LOAD_APP_ACTION';
export const GET_USERS = 'GET_USERS';

export const loadAppAction = () => ({
    type: LOAD_APP_ACTION, 
    payload: {
        value: 'Loaded correctly!'
    }
});

export function getUsers(){
    return async function(dispatch){
        const data = await axios.get('http://localhost:3004/users');
        return dispatch({
            type: GET_USERS, 
            payload: data.data
        });
    } 
}