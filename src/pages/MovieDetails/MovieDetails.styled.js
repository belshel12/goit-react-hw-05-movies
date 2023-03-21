import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & a {
    max-width: 120px;
    padding: 4px;
    text-decoration: none;
  }
`;

export const GoBackBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 4px 12px 4px 8px;
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #f5f4fa;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    background-color: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  margin: 0;
  list-style: none;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  padding: 0;
  margin: 0;
  list-style: none;
  & a:hover {
    color: red;
  }
`;
