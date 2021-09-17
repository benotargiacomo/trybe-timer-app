import React, { Component } from 'react';
import { Container, Stop, Play, Reset } from '../Controls/style';

class Controls extends Component {
  render() {
    const { running, handleStart, handleStop, handleReset } = this.props;

    return (
      <Container>
        
        <Stop 
          disabled={!running ? true : false}
          onClick={ handleStop }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 2h20v20h-20z"/></svg>
        </Stop>
        <Play 
          disabled={!running ? false : true}
          onClick={ handleStart }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
        </Play>
        <Reset
          onClick={ handleReset }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"/></svg>
        </Reset>

      </Container>
    )
  }
}

export default Controls;