import PropTypes from 'prop-types';
import placeholder from '../../pictures/placeholder.webp';
import {
  MovieCardContainer,
  MoviePoster,
  MovieDescription,
  Genres,
} from './MovieCard.styled';

const MovieCard = ({ title, release, poster, score, overview, genres }) => {
  return (
    <MovieCardContainer>
      <div>
        <MoviePoster
          src={
            poster ? 'https://image.tmdb.org/t/p/w500' + poster : placeholder
          }
        />
      </div>
      <MovieDescription>
        <div>
          <h2>
            {title} (<span>{release && release.slice(0, 4)}</span>)
          </h2>
          <p>
            User Score: <span>{Math.round(score * 10)}%</span>
          </p>
        </div>

        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>

        <div>
          <b>Genres</b>
          <Genres>
            {genres
              ? genres
                  .slice(0, 3)
                  .map(({ id, name }) => <span key={id}>{name} </span>)
              : ''}
          </Genres>
        </div>
      </MovieDescription>
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  release: PropTypes.string,
  poster: PropTypes.string,
  score: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default MovieCard;
