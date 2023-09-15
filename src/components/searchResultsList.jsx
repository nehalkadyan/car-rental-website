import React, { useState } from "react";
import "./searchResultsList.css";

const SearchResultsList = ({ results, setCity }) => {
  return (
    <div className="result-list" style={{ marginTop: "4rem" }}>
      {results.map((result, id) => {
        return (
          <div
            className="search-result"
            onClick={(e) => alert(`You clicked on ${result.name}`)}
          >
            {results.name}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsList;
