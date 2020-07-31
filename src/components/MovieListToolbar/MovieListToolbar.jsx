import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { sortMoviesBy, filterMoviesBy } from '../../context/movies/actions';
import sortTypes from '../../constants/sorting';
import filterTypes from '../../constants/filtering';
import { sortBySelector, filterBySelector } from '../../context/movies/selectors';
import { useEffect } from 'react';

const MainContentTop = () => {
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  const sortBy = useSelector(sortBySelector);
  const filterBy = useSelector(filterBySelector);

  const changeSortType = (event) => {
    history.push(`/movies?${event.target.value.toLowerCase()}`)
    dispatch(sortMoviesBy(event.target.value));
  };

  const changeFilterType = (filterType) => {
    let newLocation = history.location.search.split('&');
    history.push( {
      search: `${newLocation[0]}&${filterType.toLowerCase()}`
    });
    dispatch(filterMoviesBy(filterType));
  };

  useEffect(() => {
    if (!history.location.search.includes(sortTypes.RELEASE_DATE.toLowerCase()) && !history.location.search.includes(sortTypes.RATING.toLowerCase()) && 
    !history.location.search.includes(sortTypes.ALPHABETICALLY.toLowerCase())) {
      history.push(`/movies?${sortTypes.RELEASE_DATE.toLowerCase()}`);
    }

    if (history.location.search.includes(sortTypes.RELEASE_DATE.toLowerCase())) {
      dispatch(sortMoviesBy(sortTypes.RELEASE_DATE));
    } else if (history.location.search.includes(sortTypes.RATING.toLowerCase())) {
      dispatch(sortMoviesBy(sortTypes.RATING));
    } else if (history.location.search.includes(sortTypes.ALPHABETICALLY.toLowerCase())) {
      dispatch(sortMoviesBy(sortTypes.ALPHABETICALLY));
    }

    if (!history.location.search.includes(filterTypes.ALL.toLowerCase()) && !history.location.search.includes(filterTypes.DOCUMENTARY.toLowerCase()) && 
    !history.location.search.includes(filterTypes.COMEDY.toLowerCase())  && !history.location.search.includes(filterTypes.HORROR.toLowerCase())  && 
    !history.location.search.includes(filterTypes.CRIME.toLowerCase())) {
      history.push( {
        search: `${history.location.search}&${filterTypes.ALL.toLowerCase()}`
      });
    }

    if (history.location.search.includes(filterTypes.ALL.toLowerCase())) {
      dispatch(filterMoviesBy(filterTypes.ALL));
    } else if (history.location.search.includes(filterTypes.DOCUMENTARY.toLowerCase())) {
      dispatch(filterMoviesBy(filterTypes.DOCUMENTARY));
    } else if (history.location.search.includes(filterTypes.COMEDY.toLowerCase())) {
      dispatch(filterMoviesBy(filterTypes.COMEDY));
    } else if (history.location.search.includes(filterTypes.HORROR.toLowerCase())) {
      dispatch(filterMoviesBy(filterTypes.HORROR));
    } else if (history.location.search.includes(filterTypes.CRIME.toLowerCase())) {
      dispatch(filterMoviesBy(filterTypes.CRIME));
    }
 
  }, [filterBy, dispatch, history])

  return (
    <div className='main-content-top'>
      <ul className='main-content-list'>
        <li onClick={() => changeFilterType(filterTypes.ALL)}>All</li>
        <li onClick={() => changeFilterType(filterTypes.DOCUMENTARY)}>Documentary</li>
        <li onClick={() => changeFilterType(filterTypes.COMEDY)}>Comedy</li>
        <li onClick={() => changeFilterType(filterTypes.HORROR)}>Horror</li>
        <li onClick={() => changeFilterType(filterTypes.CRIME)}>Crime</li>
      </ul>
      <div className='main-content-sort-span'>
        <span>Sort By</span>
        <select name='sort-select' onChange={changeSortType} value={sortBy}>
          <option value={sortTypes.RELEASE_DATE}>Release Date</option>
          <option value={sortTypes.RATING}>Rating</option>
          <option value={sortTypes.ALPHABETICALLY}>Alphabetically</option>
        </select>
      </div>
    </div>
  );
};

export default MainContentTop;
