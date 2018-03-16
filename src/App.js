import React, { Component } from 'react';
import './styles/main.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home'
import OrderForm from './components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentOrder: [],
    }

  }

  render() {
    return (

      <div style={{display: 'flex', flexDirection: 'columns', position: 'absolute'}}>
        <Route exact path="/" component={Home}/>
        <Route path="/order" component={OrderForm}/>
      </div>
    );
  }
}

export default App;
