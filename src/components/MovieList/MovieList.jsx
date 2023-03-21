import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, name, title }) => (
        <Item key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <h2>{title || name}</h2>
          </Link>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
