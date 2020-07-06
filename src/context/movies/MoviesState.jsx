import React, { useReducer } from 'react';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import moviesData from '../../movies.json';
import axios from 'axios';

import {
	GET_MOVIE,
	CLOSE_MOVIE
} from '../types';

const MoviesState = props => {

	// const { moviesData } = axios.get('http://www.omdbapi.com/?apikey=[68d5b692]&');
	//Create the initial state and dispatch it
	const initialState = {
		moviesData,
		movie: null,
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	//Display movie header when a movie is selected
	const showMovieHeader = async (Title) => {
		const res = await axios.get(`http://www.omdbapi.com/?apikey=68d5b692&t=${Title}`);
		console.log(res.data);
		dispatch({ type: GET_MOVIE, payload: res.data });
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