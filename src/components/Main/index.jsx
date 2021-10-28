import React, { Component } from 'react';
import { Container } from './style';
import Timer from '../Timer';
import SetTime from '../SetTime'
import Controls from '../Controls';

const ONE_SECOND = 1000;
const RESET = {
  mm: 0,
  ss: 0,
  running: false,
  theme: "gray",
  setup: true,
};

class Main extends Component {
  constructor() {
    super();

    this.state = {
      mm: 0,
      ss: 0,
      running: false,
      theme: "gray",
      setup: true,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.switch = this.switch.bind(this);
  }

  themeColor(color) {
    this.setState({
      theme: color,
    });
  }

  switch(key, value) {
    this.setState({
      [key]: value,
    });
  }
  
  handleStart() {
    this.switch('running', true);
    this.switch('setup', false);

    this.timer = setInterval(() => {
      if (!this.state.mm && !this.state.ss) {
        // FIM DO TEMPO
        this.switch('running', false);
        clearInterval(this.timer);
      }

      if (this.state.ss > 0) {
        // -1 SEGUNDO
        this.setState((prevState) => ({
          ss: prevState.ss - 1,
        }))
      }

      if (!this.state.ss) {
        // -1 MINUTO
        this.setState((prevState) => ({
          ss: !this.state.mm ? 0 : 59,
          mm: !this.state.mm ? 0 : prevState.mm - 1,
        }));
      }
    }, ONE_SECOND);

    // START
    this.themeColor("green");
  }

  handleStop() {
    // STOP
    this.switch('running', false);
    clearInterval(this.timer);
    this.themeColor("red");
  }

  handleReset() {
    // RESET
    this.setState(RESET);
    this.themeColor("gray");
  }

  onTimeChange(event) {
    const { value } = event.target;
    const getSeconds = value.toString().slice(-2);
    const getMinutes = value.toString().slice(-4, -2);
    const ss = parseInt(getSeconds);
    const mm = parseInt(getMinutes);

    this.setState({
      mm,
      ss,
    })
  }

  render() {
    const { mm, ss, running, theme, setup } = this.state;

    return (
      <Container theme={theme}>
        { setup
          ? <SetTime onChange={ this.onTimeChange } /> 
          : <Timer mm={mm} ss={ss} />
        }
        <Controls
          running={running}
          handleStart={this.handleStart}
          handleStop={this.handleStop}
          handleReset={this.handleReset}
        />
      </Container>
    );
  }
}

export default Main;
