import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const ActorName = styled.h2`
  font-size: 18px;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const Character = styled.p`
  font-size: 14px;
  margin: 0;
  text-align: center;
`;
