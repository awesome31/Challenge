import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onSubmit = () => props.onSearch(term);

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search this blog"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button" onClick={onSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
