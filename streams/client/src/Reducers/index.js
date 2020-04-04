import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer'; // This is where the name is given to the reducer - the definition file itself does not hold the name of the reducer

export default combineReducers({
	// Every reducer must be added here
	auth: authReducer,
	form: formReducer,
	streams: streamReducer,
});
