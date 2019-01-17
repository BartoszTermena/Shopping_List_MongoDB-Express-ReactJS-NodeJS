import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ShoppingList />
      </>
    );
  }
}

export default App;
