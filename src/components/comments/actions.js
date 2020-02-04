import axios from "axios";

export const GET_COMMENTS = 'GET_COMMENTS';

export function getComments(){
    return async function(dispatch){
        const data = await axios.get('http://localhost:3004/notes');
        return dispatch({
            type: GET_COMMENTS, 
            payload: data.data
        });
    }    
}