import React from "react";
import styles from './SearchBar.css'

function SearchBar () {
    return (
        <div className="SearchBar">
          <input
            placeholder="Enter Song, Album, or Artist"
          />
          <button className="SearchButton" >
            SEARCH
          </button>
      </div>
        );
}

export default SearchBar;
