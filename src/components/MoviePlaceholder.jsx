import React from 'react';
import EditMovieModal from './EditMovieModal';
import DeleteMovieModal from './DeleteMovieModal';

function MoviePlaceholder () {
  return (
    <div className='movie-placeholder'>
      <div>THIS IS A MOVIE</div>
        <EditMovieModal/>
        <DeleteMovieModal/>
    </div>
  )
}

export default MoviePlaceholder;
