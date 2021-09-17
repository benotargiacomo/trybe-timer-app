import styled from 'styled-components';

export const Input = styled.input`
  padding: 6px 0;
  
  color: var(--green);
  background-color: transparent;
  
  border: 3px solid var(--green);
  border-radius: 4px;
  
  font-size: 4em;
  text-align: center;

  &:focus {
    color: white;
    outline: none;
}
`;