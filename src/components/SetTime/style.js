import styled from 'styled-components';

export const Input = styled.input`
  color: white;
  background-color: transparent;

  /* border: 3px solid var(--green); */
  /* border-radius: 4px; */

  font-size: 22vw;
  font-weight: bold;
  text-align: center;

  &:focus {
    outline: none;
  }

  &::placeholder {
  color: white;
  opacity: .05;
}

  &:-ms-input-placeholder {
  color: white;
}

  &::-ms-input-placeholder {
  color: white;
}

`;