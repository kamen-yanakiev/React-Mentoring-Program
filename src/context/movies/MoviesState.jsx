import React, { useReducer } from 'react';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import moviesData from '../../movies.json';
// import axios from 'axios';

import {
	GET_MOVIE,
	CLOSE_MOVIE,
	EDIT_MOVIE,
	DELETE_MOVIE,
	ADD_MOVIE
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
	const showMovieHeader = async (imdbID) => {
		// const res = await axios.get(`http://www.omdbapi.com/?apikey=68d5b692&i=${imdbID}`);
		// console.log(res.data);
		const movieIndex = moviesData.findIndex(movie => movie.imdbID === imdbID);
		// dispatch({ type: GET_MOVIE, payload: res.data });
		dispatch({ type: GET_MOVIE, payload: moviesData[movieIndex] });
	}

	//Close movie and show default header
	const closeMovie = () => dispatch({ type: CLOSE_MOVIE });

	//Edit movie
	const editMovie = (movie, imdbID, titleValue, releaseDateValue, urlValue, genreValue, plotValue, runtimeValue) => {
		titleValue.length > 0 ? movie.Title = titleValue : titleValue = null;
		releaseDateValue.length > 0 ? movie.Released = releaseDateValue : releaseDateValue = null;
		urlValue.length > 0 ? movie.Poster = urlValue : urlValue = null;
		genreValue.length > 0 ? movie.Genre = genreValue : genreValue = null;
		plotValue.length > 0 ? movie.Plot = plotValue : plotValue = null;
		runtimeValue.length > 0 ? movie.Runtime = runtimeValue : runtimeValue = null;
		
		const movieIndex = moviesData.findIndex(movie => movie.imdbID === imdbID);
		moviesData[movieIndex] = movie;
		dispatch({ type: EDIT_MOVIE });
	}

	//Delete movie
	const deleteMovie = (imdbID) => {
		const movieIndex = moviesData.findIndex(movie => movie.imdbID === imdbID);
		moviesData.splice(movieIndex, 1);
		dispatch({ type: DELETE_MOVIE });
	}

	//Add movie
	const addMovie = (movie) => {
		moviesData.push(movie);
		dispatch({ type: ADD_MOVIE });
	}

	return <MoviesContext.Provider
		value={{
			moviesData: state.moviesData,
			movie: state.movie,
			showMovieHeader,
			closeMovie,
			editMovie,
			deleteMovie,
			addMovie
		}}
	>
		{props.children}
	</MoviesContext.Provider>
}

export default MoviesState;