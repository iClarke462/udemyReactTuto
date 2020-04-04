import { SIGN_IN, SIGN_OUT, CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createStream = formValues => async (dispatch, getState) => {
	const { userId } = getState().auth; // Destructured
	const response = await streams.post('/streams', { ...formValues, userId }); // do something
	dispatch({ type: CREATE_STREAM, payload: response.data }); // update the state via redux
	// Programmatic navigation to get user back to stream list = root route
	history.push('/');
};

export const fetchStreams = () => async dispatch => {
	const response = await streams.get('/streams');
	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = recordId => async dispatch => {
	const response = await streams.get(`/streams/${recordId}`);
	dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = recordId => async dispatch => {
	await streams.delete(`/streams/${recordId}`);
	dispatch({ type: DELETE_STREAM, payload: recordId });
	history.push('/');
};

export const editStream = (recordId, formValues) => async dispatch => {
	const response = await streams.patch(`/streams/${recordId}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });

	history.push('/'); // Navigate back to root route
};
