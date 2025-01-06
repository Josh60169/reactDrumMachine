import React from 'react';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display">
        <Drumpad letter="Q" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')} id="Heater-1" />
        <Drumpad letter="W" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')} id="Heater-2" />
        <Drumpad letter="E" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')} id="Heater-3" />
        <Drumpad letter="A" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')} id="Heater-4" />
        <Drumpad letter="S" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')} id="Clap" />
        <Drumpad letter="D" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')} id="Open HH" />
        <Drumpad letter="Z" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')} id="Kick n'Hat" />
        <Drumpad letter="X" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')} id="Kick" />
        <Drumpad letter="C" sound={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')} id="Closed HH" />
      </div>
    );
  }
}

class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: this.props.letter,
      sound: this.props.sound,
      id: this.props.id
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.sound.play();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.letter}</button>
      </div>
    );
  }
}