import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import MainContentTop from '../components/MovieListToolbar';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';
import sortTypes from '../constants/sorting';
import filterTypes from '../constants/filtering';
import { useGetMovies } from '../hooks/movie';
import { moviesDataSelector, loadingSelector, errorSelector, sortBySelector, filterBySelector } from '../context/movies/selectors';

function sortMovies(sortType, stateMoviesData) {
  switch (sortType) {
    case sortTypes.RELEASE_DATE:
      return stateMoviesData.sort((a, b) => {
        return new Date(a.Released) - new Date(b.Released);
      });
    case sortTypes.RATING:
      return stateMoviesData.sort((a, b) => {
        if (Number(a.imdbRating) > Number(b.imdbRating)) return -1;
        if (Number(a.imdbRating) < Number(b.imdbRating)) return 1;
        return 0;
      });
    case sortTypes.ALPHABETICALLY:
      return stateMoviesData.sort((a, b) => {
        return a.Title.localeCompare(b.Title);
      });
    default:
      return stateMoviesData;
  }
}

function filterMovies(filterType, moviesData) {
  if (filterType === filterTypes.ALL) {
    return moviesData;
  }
  return moviesData.filter(movie => movie.Genre.toLowerCase().includes(filterType.toLowerCase()));
}

const MovieListPage = () => {
  const moviesData = useSelector(moviesDataSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const sortBy = useSelector(sortBySelector);
  const filterBy = useSelector(filterBySelector);

  const sortedData = sortMovies(sortBy, moviesData);

  const filteredData = filterMovies(filterBy, sortedData);
  useGetMovies();

  if (error) {
    return <div>Error</div>
  }
  return (
    <div>
      <Header />
    {loading 
    ? <Spinner /> 
    : <div>
    <MainContentTop />
    <MovieList movies={filteredData} />
    </div>}
    </div>
  );
};

export default MovieListPage;
