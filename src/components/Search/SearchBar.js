import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onSearchSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
