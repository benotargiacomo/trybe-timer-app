import React, { Component } from 'react';
import { Input } from './style';

class SetTime extends Component {
  render() {
    return (
      <>
      <Input
        size="4"
        type="text"
        pattern="[A-Za-z]{3}"
        maxLength="4" 
        placeholder="mm:ss"/>
      </>
    )
  }
}

export default SetTime;