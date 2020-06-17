import React, { useReducer, useContext, useState } from 'react';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import {
	GET_MOVIE,
	SET_LOADING,
} from '../types';

const MoviesState = props => {
	const initialState = {
		movie: {},
		loading: true
	}

    const [state, dispatch] = useReducer(MoviesReducer, initialState);
    
    
    const changeHeader = () => {
        if (state.loading) {
            getMovie();
        } else {
            setLoading(true);
        }
    }

    const getMovie = (movie) => {
        console.log('in getmovie');
        
        dispatch({ type: GET_MOVIE, payload: movie });
    };

	//Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return <MoviesContext.Provider
		value={{
			movie: state.user,
            loading: state.loading,
            changeHeader
		}}
	>
		{ props.children }
	</MoviesContext.Provider>
}

export default MoviesState;