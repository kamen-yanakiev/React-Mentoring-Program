import React from 'react';
import filterTypes from '../../constants/filtering';

export default { title: 'FilterMoviesSelect' };

export const FilterMoviesSelect = () => (
    <div className='main-content-top'>
        <ul className='main-content-list'>
            <li>{filterTypes.ALL}</li>
            <li>{filterTypes.DOCUMENTARY}</li>
            <li>{filterTypes.COMEDY}</li>
            <li>{filterTypes.HORROR}</li>
            <li>{filterTypes.CRIME}</li>
        </ul>
    </div>
);
