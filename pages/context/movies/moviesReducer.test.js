import { types } from './actions';
import moviesReducer from './moviesReducer';
import expect from 'expect';

jest.mock('axios');

describe('post reducer', () => {

    //GET_MOVIES tests
    it('should set loading to true when the action is GET_MOVIES', () => {
        const state = moviesReducer(null, { type: types.GET_MOVIES });

        expect(state).toEqual({ loading: true, error: null });
    });

    it('should return correct data when the action is GET_MOVIES_SUCCESS', () => {
        const action = {
            type: types.GET_MOVIES_SUCCESS,
            payload: { name: 'test name' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ moviesData: { name: 'test name' }, loading: false });
    });

    it('should return correct data when the action is GET_MOVIES_FAILURE', () => {
        const action = {
            type: types.GET_MOVIES_FAILURE,
            payload: { error: 'error name' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ error: { error: 'error name' }, loading: false });
    });

    //SET_MOVIE_TO_SHOW tests
    it('should set headerLoading to true and provide payload with id when the action is SET_MOVIE_TO_SHOW', () => {
        const action = {
            type: types.SET_MOVIE_TO_SHOW,
            payload: { selectedMovieId: 'aa' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ selectedMovieId: {selectedMovieId: 'aa'}, headerLoading: true });
    });

    //GET_MOVIE_DETAILS tests
    it('should set headerLoading to true when the action is GET_MOVIE_DETAILS', () => {
        const state = moviesReducer(null, { type: types.GET_MOVIE_DETAILS });

        expect(state).toEqual({ headerLoading: true });
    });

    it('should return correct data when the action is GET_MOVIE_DETAILS_SUCCESS', () => {
        const action = {
            type: types.GET_MOVIE_DETAILS_SUCCESS,
            payload: { movie: {name: 'aa'} }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ movie: {movie: {name: 'aa'}}, headerLoading: false });
    });

    it('should return correct data when the action is GET_MOVIE_DETAILS_FAILURE', () => {
        const action = {
            type: types.GET_MOVIE_DETAILS_FAILURE,
            payload: { error: 'error name' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ movie: null, error: { error: 'error name' }, headerLoading: false });
    });

    //CLOSE_MOVIE tests
    it('should set movie and selectedMovieId to false when the action is CLOSE_MOVIE', () => {
        const state = moviesReducer(null, { type: types.CLOSE_MOVIE });

        expect(state).toEqual({ movie: null, selectedMovieId: null });
    });

    //EDIT_MOVIE tests
    it('should set loading to true when the action is EDIT_MOVIE', () => {
        const state = moviesReducer(null, { type: types.EDIT_MOVIE });

        expect(state).toEqual({ loading: true });
    });

    it('should return correct data when the action is EDIT_MOVIE_SUCCESS', () => {
        const state = moviesReducer(null, { type: types.EDIT_MOVIE_SUCCESS });

        expect(state).toEqual({ loading: false });
    });

    it('should return correct data when the action is EDIT_MOVIE_FAILURE', () => {
        const action = {
            type: types.EDIT_MOVIE_FAILURE,
            payload: { error: 'error name' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ error: { error: 'error name' }, loading: false });
    });

    //DELETE_MOVIE tests
    it('should set loading to true when the action is DELETE_MOVIE', () => {
        const state = moviesReducer(null, { type: types.DELETE_MOVIE });

        expect(state).toEqual({ loading: true });
    });

    it('should return correct data when the action is DELETE_MOVIE_SUCCESS', () => {
        const state = moviesReducer(null, { type: types.DELETE_MOVIE_SUCCESS });

        expect(state).toEqual({ loading: false });
    });

    it('should return correct data when the action is DELETE_MOVIE_FAILURE', () => {
        const action = {
            type: types.DELETE_MOVIE_FAILURE,
            payload: { error: 'error name' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ error: { error: 'error name' }, loading: false });
    });

    //ADD_MOVIE tests
    it('ADD_MOVIE should correctly return the state', () => {
        const state = moviesReducer(null, { type: types.ADD_MOVIE });

        expect(state).toEqual({});
    });

    it('ADD_MOVIE_SUCESS should correctly return the state', () => {
        const state = moviesReducer(null, { type: types.ADD_MOVIE_SUCCESS });

        expect(state).toEqual({});
    });

    it('ADD_MOVIE_FAILURE should correctly return the state', () => {
        const action = {
            type: types.ADD_MOVIE_FAILURE,
            payload: { error: 'error name' }
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ error: { error: 'error name' } });
    });

    //SORT_MOVIES tests
    it('should return correct data when the action is SORT_MOVIES', () => {
        const action = {
            type: types.SORT_MOVIES,
            payload:  'ALPHABETICALLY'
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ sortBy: 'ALPHABETICALLY' });
    });

    //FILTER_MOVIES tests
    it('should return correct data when the action is FILTER_MOVIES', () => {
        const action = {
            type: types.FILTER_MOVIES,
            payload:  'DOCUMENTARY'
        }
        const state = moviesReducer(null, action);

        expect(state).toEqual({ filterBy: 'DOCUMENTARY' });
    });

});