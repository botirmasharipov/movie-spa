import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const doSearch = (event) => {
    // console.log(event.target.value);
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
       <FontAwesomeIcon icon={faSearch} name="search" size="2x"/>
        <input
          type="text"
          placeholder="Search movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;