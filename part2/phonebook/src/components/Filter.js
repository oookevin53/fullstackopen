import React from "react";

const Filter = ({ filter, handleSearch }) => (
    <div>filter shown with 
        <input 
            value={filter} 
            onChange={handleSearch}
        />
    </div>
)

export default Filter