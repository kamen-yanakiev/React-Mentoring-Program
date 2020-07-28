import { types } from './actions';
import moviesReducer from './moviesReducer';
import expect from 'expect';

jest.mock('axios');

const newState = {
    test: '1234'
}

describe('post reducer', () => {
    it('should return correct data when the action is GET_MOVIES', () => {
        const state = moviesReducer(newState, { type: types.GET_MOVIES });

        expect(state).toEqual({ test: '1234', loading: true, error: null })
    });

    it('should return correct data when the action is GET_MOVIES_SUCCESS', () => {
        const action = {
            type: types.GET_MOVIES_SUCCESS,
            payload: { name: 'test name' }
        }
        const state = moviesReducer(newState, action);

        expect(state).toEqual({ test: '1234', moviesData: { name: 'test name' }, loading: false });
    });

    it('should return correct data when the action is GET_MOVIES_FAILURE', () => {
        const action = {
            type: types.GET_MOVIES_FAILURE,
            payload: { error: 'error name' }
        }
        const state = moviesReducer(newState, action);

        expect(state).toEqual({ test: '1234', error: { error: 'error name' }, loading: false });
    });

    it('ADD_MOVIE_SUCESS should correctly return the state', () => {
        const state = moviesReducer(newState, { type: types.ADD_MOVIE_SUCCESS });

        expect(state).toEqual({ test: '1234' });
    });

});