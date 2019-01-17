import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>hello</h1>
      </>
    );
  }
}

export default App;
