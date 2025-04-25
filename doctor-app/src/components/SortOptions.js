import React from "react";

function SortOptions({ sortBy, setSortBy }) {
  return (
    <div>
      <h3 data-testid="filter-header-sort">Sort By</h3>
      <label>
        <input
          type="radio"
          name="sort"
          checked={sortBy === "fees"}
          onChange={() => setSortBy("fees")}
          data-testid="sort-fees"
        />
        Fees (Low to High)
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          checked={sortBy === "experience"}
          onChange={() => setSortBy("experience")}
          data-testid="sort-experience"
        />
        Experience (High to Low)
      </label>
    </div>
  );
}

export default SortOptions;
