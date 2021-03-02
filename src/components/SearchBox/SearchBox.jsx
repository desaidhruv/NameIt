import React from 'react';
import './SearchBox.css';
const SearchBox = ({ OnInputChange }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => OnInputChange(event.target.value)} type="text" className="search-input" placeholder="Type keywords" />
        </div>
    )
}

export default SearchBox;