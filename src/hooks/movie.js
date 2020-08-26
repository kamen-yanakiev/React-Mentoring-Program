import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startGetMovies } from '../context/movies/actions';

// eslint-disable-next-line import/prefer-default-export
export const useGetMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        startGetMovies(dispatch);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
