import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchButton, Form, ButtonLabel, FormInput } from './SearchBar.styled';

const SearchBar = ({ onSearch }) => {
  const [queryName, setQueryName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQueryName(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (queryName.trim() === '') {
      return toast('Enter a search value.');
    }

    onSearch(queryName);
    setQueryName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={queryName}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <ButtonLabel></ButtonLabel>
        <BsSearch size="18" />
      </SearchButton>
      <ToastContainer autoClose={2000} theme="light" />
    </Form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
