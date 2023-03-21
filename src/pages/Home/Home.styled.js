import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 0 0 12px;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-size: 18px;
  line-height: 1.32;
  letter-spacing: 0.03em;
  padding: 0;
  margin: 0;
  list-style: none;
`;
