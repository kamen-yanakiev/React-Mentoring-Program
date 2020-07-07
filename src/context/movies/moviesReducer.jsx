import {
	GET_MOVIE,
	CLOSE_MOVIE,
	EDIT_MOVIE,
	DELETE_MOVIE,
	ADD_MOVIE
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
			case EDIT_MOVIE:
				return {
					...state
				};
			case DELETE_MOVIE:
				return {
					...state
				}
			case ADD_MOVIE:
				return {
					...state
				}
		default:
			return state;
	}
}