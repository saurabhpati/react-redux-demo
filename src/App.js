import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Counter from './Counter';
import Greeting from './Greeting';
import HelloWorld from './HelloWorld';
import { store } from "./store";
import ButtonGroup from './ButtonGroup';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Greeting />
        <Counter count={store.getState().count} />
        <Clock
          timeStyle={store.getState().timeStyle}
          time={store.getState().time}
          timerText={store.getState().timerText}
          isTimerRunning={!!store.getState().timerRef} />
        <HelloWorld tech={store.getState().tech} />
        <ButtonGroup technologies={['React', 'React-Redux', 'Elm']}></ButtonGroup>
      </div>
    );
  }
}

export default App;
