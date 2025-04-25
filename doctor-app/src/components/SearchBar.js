import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        data-testid="autocomplete-input"
        placeholder="Search by doctor name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
