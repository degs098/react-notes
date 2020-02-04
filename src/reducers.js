import { combineReducers } from 'redux';
import reducer from './reducer';
import commentsReducer from './components/comments/reducer';

export default combineReducers({
    appReducer: reducer,
    commentsReducer 
});