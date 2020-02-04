import { GET_COMMENTS } from "./actions";

const initialState = {
    comments: [],
    commentInputValue: ''
};

export default (state = initialState, { type, payload}) => {
    switch(type){
        case GET_COMMENTS:                         
            return {...state, comments: payload }        
        default:
            return state;
    }
}