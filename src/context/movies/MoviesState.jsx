import React, { useReducer } from 'react';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import moviesData from '../../movies.json';

import {
	GET_MOVIE,
	CLOSE_MOVIE
} from '../types';

const MoviesState = props => {

	//Create the initial state and dispatch it
	const initialState = {
		moviesData,
		movie: null,
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	//Display movie header when a movie is selected
	const showMovieHeader = (movie) => {
		dispatch({ type: GET_MOVIE, payload: movie });
	}

	//Close movie and show default header
	const closeMovie = () => dispatch({ type: CLOSE_MOVIE });

	return <MoviesContext.Provider
		value={{
			moviesData: state.moviesData,
			movie: state.movie,
			showMovieHeader,
			closeMovie
		}}
	>
		{props.children}
	</MoviesContext.Provider>
}

export default MoviesState;