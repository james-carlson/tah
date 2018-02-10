import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Menu from './components/Menu/Menu';
import OrderForm from './components/OrderForm/OrderForm';

// TODO:
// 

class App extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  render() {
    return (
      <div>
          <Home />
          <About />
          <Menu />
          <OrderForm />
      </div>
    );
  }
}

export default App;
