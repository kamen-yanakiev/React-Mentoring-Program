import React from 'react';
import { useSelector } from 'react-redux';
import MainContentTop from '../components/main/MainContentTop';
import { useGetMovies } from '../hooks/movie';
import Movies from '../components/movie/Movies';
import Spinner from './Spinner';
import sortTypes from '../constants/sorting';
import filterTypes from '../constants/filtering';
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

const MainContent = () => {
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
    loading 
    ? <Spinner /> 
    : <div>
    <MainContentTop />
    <Movies movies={filteredData} />
  </div>
    
  );
};

export default MainContent;
