import {
	GET_MOVIE,
	SET_LOADING,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false
			};
		default:
			return state;
	}
}