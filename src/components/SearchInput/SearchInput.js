import React from 'react';
import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
    return (
        <div className='inputWrapper'>
            <div className='searchIcon'>
                <FontAwesomeIcon className="searchGlass" icon={faMagnifyingGlass} />
            </div>
            <input type='text' className='input' required></input>
        </div>
    );
};

export default SearchInput;