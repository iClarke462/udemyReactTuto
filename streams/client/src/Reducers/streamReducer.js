// import { EDIT_STREAM } from '../Actions/types';

// // Array based approach
// const streamReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case EDIT_STREAM:
// 			return state.map(stream => {
// 				if (stream.id === action.payload.id) {
// 					return action.payload;
// 				} else {
// 					return stream;
// 				}
// 			});
// 		default:
// 			return state;
// 	}
// };

// // Object based approach

// const streamReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case EDIT_STREAM:
// 			/* const newState = { ...state }; // Need to return a modified state, so cloning the state
// 			newState[action.payload.id] = action.payload;
//             return newState; */
// 			return { ...state, [action.payload.id]: action.payload }; // more efficient key interpolation syntax // not creating an array here
// 		default:
// 			return state;
// 	}
// };

import { FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, CREATE_STREAM, DELETE_STREAM } from '../Actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload }; // Find object with that id and if found edit if not add it
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload); // Here payload IS the is, contrary to thers where payload is entire stream object
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') }; // mapkeys is a lodash function

		default:
			return state;
	}
};
