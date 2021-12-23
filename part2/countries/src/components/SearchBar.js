import React from "react";

const SearchBar = ({ search, handleSearch }) => (
    <div>find countries
    <input 
        value={search} 
        onChange={handleSearch}
    />
    </div>
)

export default SearchBar