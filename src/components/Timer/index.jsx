import React, { Component } from 'react';
import { Container } from '../Timer/style';

class Timer extends Component {
  render() {
    const { mm, ss } = this.props;

    return(
      <Container >
        { !mm ? null : <h1>{ mm }<span>m</span></h1> }
        <h1>{ ss }<span>s</span></h1>
      </Container>
    )
  }
}

export default Timer;