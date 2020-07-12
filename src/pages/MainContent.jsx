import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainContentTop from '../components/main/MainContentTop';
import { getMovies } from '../context/movies/actions';
import Movies from '../components/movie/Movies';
import axios from 'axios';
import Spinner from './Spinner';

const MainContent = () => {
  const { moviesData, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();


  if (loading) {
    // dispatch(getMovies());
    axios.get('http://localhost:3000/movies')
    .then((res) =>{
      dispatch(getMovies(res));
    })
    .catch((error)=> {
      console.log('error');
      dispatch(getMovies(error));
    })
    return <Spinner />
  }
  return (
    <div>
      <MainContentTop />
      <Movies movies={moviesData} />
    </div>
  );
};

export default MainContent;
