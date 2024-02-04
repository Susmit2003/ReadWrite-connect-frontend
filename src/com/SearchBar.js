import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchState';

export default function SearchBar() {
  const { state, setText } = useContext(SearchContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="searchBar">
      <input id="searchBarInp"
       placeholder='Search'
        type="text"
        value={state.searchText}
        onChange={handleChange}
      />
    </div>
  );
}
