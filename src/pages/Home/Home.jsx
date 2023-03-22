import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'services/getApi';
import { Item, List } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  //   const isFirstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    //  if (isFirstRender.current) {
    //    isFirstRender.current = false;
    //    return;
    //  }
    getTrending()
      .then(result => {
        setMovies(result);
      })
      .catch(error => console.log(error));
  }, [movies]);

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default Home;
