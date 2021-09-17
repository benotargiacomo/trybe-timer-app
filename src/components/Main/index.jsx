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
};

class Main extends Component {
  constructor() {
    super();

    this.state = {
      mm: 10,
      ss: 30,
      running: false,
      theme: "gray",
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate() {
    // if (this.state === RESET) {
    //   clearInterval(this.timer);
    //   this.themeColor("gray");
    //   console.log("ZEROU");
    // }
  }

  themeColor(color) {
    this.setState({
      theme: color,
    });
  }

  runningSwitch(bool) {
    this.setState((state) => ({
      running: bool,
    }))
  }
  
  // CRIAR CONTAGEM REGRESSIVA ANTES DE COMEÇAR!!!
  handleStart() {
    this.runningSwitch(true);

    this.timer = setInterval(() => {
      console.log('-1 segundo')
      this.setState((prevState) => ({
        ss: prevState.ss - 1,
      }));

      // if(this.state.mm) {
      //   this.setState(() => ({
      //     ss: 59,
      //   }))
      // }

      if (!this.state.mm && !this.state.ss) {
        console.log("FIM DO TEMPO")
        this.runningSwitch(false);
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
    this.runningSwitch(false);
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

  render() {
    const { mm, ss, running, theme } = this.state;

    return (
      <Container theme={theme}>
        {/* <SetTime /> */}
        <Timer mm={mm} ss={ss} />
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
