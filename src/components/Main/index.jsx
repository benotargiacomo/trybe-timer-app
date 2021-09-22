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
  
  // CRIAR CONTAGEM REGRESSIVA ANTES DE COMEÇAR!!!
  handleStart() {
    this.switch('running', true);
    this.switch('setup', false);

    this.timer = setInterval(() => {
      console.log('-1 segundo')
      this.setState((prevState) => ({
        ss: prevState.ss - 1,
      }));

      if (!this.state.mm && !this.state.ss) {
        console.log("FIM DO TEMPO")
        this.switch('running', false);
        clearInterval(this.timer);
      } else if (!this.state.ss) {
        this.setState((prevState) => ({
          ss: !this.state.mm ? 0 : 60,
          mm: !this.state.mm ? 0 : prevState.mm - 1,
        }));
        console.log("-1 minuto");
      }
    }, ONE_SECOND);

    this.themeColor("green");
    console.log("START");
  }

  handleStop() {
    this.switch('running', false);
    // DESABILITAR BOTÃO EM ALGUNS CASOS
    clearInterval(this.timer);
    this.themeColor("red");
    console.log("STOP");
  }

  handleReset() {
    this.setState(RESET);
    this.themeColor("gray");
    console.log("RESET");
  }

  onTimeChange(event) {
    const { value } = event.target;
    const getSeconds = value.toString().slice(-2);
    const getMinutes = value.toString().slice(-4, -2);
    const ss = parseInt(getSeconds);
    const mm = parseInt(getMinutes);

    console.log(`${mm}min ${ss}sec`)

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
