import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="search-container">
            <div className="heading-container">
                <h2>How can we help?</h2>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="search-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
