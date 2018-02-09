import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Menu from './components/Menu';

// TODO:
// 

class App extends Component {
  constructor(){
    super()

    this.state = {

    }

  }

  render() {
    return (
      <div className="App">
      <Landing variables="mew" />
      <h1>Tamales @ Work</h1>
      <div className="nav">
      Order by 10, we'll have it ready when you want between 12 and 2.
      <Menu />
      </div>
      </div>
    );
  }
}

export default App;
