import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => {
    if (props.theme === 'red') return 'var(--red)'
    if (props.theme === 'green') return 'var(--green)'

    return 'var(--gray)'
  }};
`;