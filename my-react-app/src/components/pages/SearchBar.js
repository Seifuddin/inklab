import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDeafault();
        onSearch(query);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="search..."
            />
            <button className="btnsearch" type="submit">search</button>
        </form>  
    );
};

export default SearchBar