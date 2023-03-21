import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getApi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import MovieCard from 'components/MovieCard';
import Loader from 'components/Loader';
import { Container, GoBackBtn, List, Item } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const isFirstRender = useRef(true);
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    getMovieById(movieId)
      .then(resp => {
        setMovie(resp);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <Container>
      <Link to={backLinkLocation.current}>
        <GoBackBtn>
          <AiOutlineArrowLeft size="18" />
          <span>Go back</span>
        </GoBackBtn>
      </Link>

      <MovieCard
        title={movie.title || movie.name}
        release={movie.release_date}
        poster={movie.poster_path}
        score={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
      />
      <List>
        <Item>
          <Link to="cast">Cast</Link>
        </Item>
        <Item>
          <Link to="reviews">Review</Link>
        </Item>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
