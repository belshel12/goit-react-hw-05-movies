import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/getApi';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    getMovies(query)
      .then(resp => {
        setMovies(resp);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      {query !== '' && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
