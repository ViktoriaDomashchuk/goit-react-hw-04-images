import PropTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput, SearchFormButtonLabel
} from './Searchbar.styled';

import { FaSearch } from 'react-icons/fa';

export const SearchBar =({onSubmit})=> {
  
  const handleSubmit = evt => {
      evt.preventDefault();
      onSubmit(evt.currentTarget.elements.query.value);

  };

    return (
      <SearchbarContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
          <FaSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
          />
        </SearchForm>
      </SearchbarContainer>
    );
}

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired
}.isRequired;