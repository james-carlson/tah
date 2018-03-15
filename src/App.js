import React, { Component } from 'react';
import './styles/main.css';
import Home from './components/Home/Home'


class App extends Component {
  constructor() {
    super()
    
    this.state = {

    }

  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'columns', position: 'absolute'}}>
          <Home />
      </div>
    );
  }
}

export default App;
