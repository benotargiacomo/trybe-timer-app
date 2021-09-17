import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg {
    fill: black;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f0efeb;
  opacity:  ${ props => !props.disabled ? '100%' : '80%' };
  cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer' };
  border-radius: 50%;

  &:hover {
    background-color: ${ props => !props.disabled ? 'white' : '#f0efeb'  };
  }
`;

export const Play = styled(Button)`
  height: 8vh;
  width: 8vh;

  svg {
    -webkit-transform: translateX(3px);
    -o-transform: translateX(3x);
    transform: translateX(3px);
    height: 30px;
    fill: #06d6a0;
  }
`;

export const Stop = styled(Button)`
  height: 5vh;
  width: 5vh;

  svg {
    height: 16px;
    fill: #ef476f;
  }
`;

export const Reset = styled(Button)`
  height: 5vh;
  width: 5vh;

  svg {
    height: 16px;
    fill: #747572;
  }
`;
