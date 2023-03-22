import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/getApi';
import { CastList, CastItem, Image, ActorName, Character } from './Cast.styled';
import placeholder from '../../pictures/placeholder.webp';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(resp => {
        setCast(resp);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast.map(({ id, name, profile_path, character }) => (
          <CastItem key={id}>
            <Image
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : placeholder
              }
              alt={name}
            />
            <ActorName>{name}</ActorName>
            <Character>{character}</Character>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
