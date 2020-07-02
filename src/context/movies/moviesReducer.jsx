import {
	GET_MOVIE,
	CLOSE_MOVIE,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload
			};
		case CLOSE_MOVIE:
			return {
				...state,
				movie: null
			};
		default:
			return state;
	}
}