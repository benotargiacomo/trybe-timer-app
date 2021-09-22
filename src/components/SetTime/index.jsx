import React, { Component } from 'react';
import { Input } from './style';

class SetTime extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <>
      <Input
        size="1"
        type="text"
        maxLength="4"
        placeholder="0"
        onChange= { onChange }
      />
      </>
    )
  }
}

export default SetTime;