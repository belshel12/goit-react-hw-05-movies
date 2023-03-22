import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 460px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2),
    0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 32px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 1px 8px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
