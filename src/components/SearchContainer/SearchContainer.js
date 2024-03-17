import React from 'react';
import './SearchContainer.css';
import SearchInput from '../SearchInput/SearchInput';
import SortResults from '../SortResults/SortResults';

const SearchContainer = () => {
    return (
        <div className='searchContainer'>
            <SearchInput />
            <SortResults />
        </div>
    );
};

export default SearchContainer;
