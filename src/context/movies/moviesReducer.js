import { types } from './actions';
import moviesData from '../../movies.json';
import sortTypes from '../../constants/sorting';
import filterTypes from '../../constants/filtering';

const defaultState = {
    moviesData,
    movie: null,
    loading: true,
    error: null,
    selectedMovieId: null,
    headerLoading: false,
    sortBy: sortTypes.RELEASE_DATE,
    filterBy: filterTypes.ALL,
};

export default (state = defaultState, action) => {
    switch (action.type) {
    case types.GET_MOVIES:
        return {
            ...state,
            loading: true,
            error: null,
        };
    case types.GET_MOVIES_SUCCESS:
        return {
            ...state,
            moviesData: action.payload,
            loading: false,
        };
    case types.GET_MOVIES_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case types.SET_MOVIE_TO_SHOW:
        return {
            ...state,
            selectedMovieId: action.payload,
            headerLoading: true,
        };
    case types.GET_MOVIE_DETAILS:
        return {
            ...state,
            headerLoading: true,
        };
    case types.GET_MOVIE_DETAILS_SUCCESS:
        return {
            ...state,
            movie: action.payload,
            headerLoading: false,
        };
    case types.GET_MOVIE_DETAILS_FAILURE:
        return {
            ...state,
            movie: null,
            error: action.payload,
            headerLoading: false,
        };
    case types.CLOSE_MOVIE:
        return {
            ...state,
            movie: null,
            selectedMovieId: null,
        };
    case types.EDIT_MOVIE:
        return {
            ...state,
            loading: true,
        };
    case types.EDIT_MOVIE_SUCCESS:
        return {
            ...state,
            loading: false,
        };
    case types.EDIT_MOVIE_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case types.DELETE_MOVIE:
        return {
            ...state,
            loading: true,
        };
    case types.DELETE_MOVIE_SUCCESS:
        return {
            ...state,
            loading: false,
        };
    case types.DELETE_MOVIE_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case types.ADD_MOVIE:
        return {
            ...state,
        };
    case types.ADD_MOVIE_SUCCESS:
        return {
            ...state,
        };
    case types.ADD_MOVIE_FAILURE:
        return {
            ...state,
            error: action.payload,
        };
    case types.SORT_MOVIES:
        return {
            ...state,
            sortBy: action.payload,
        };
    case types.FILTER_MOVIES:
        return {
            ...state,
            filterBy: action.payload,
        };
    default:
        return state;
    }
};
