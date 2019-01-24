import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </Provider>
    );
  }
}

export default App;
