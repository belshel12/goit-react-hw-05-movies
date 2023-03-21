import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const MoviePoster = styled.img`
  object-fit: cover;
  width: 280px;
  height: 100%;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Genres = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;
