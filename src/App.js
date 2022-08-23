import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import PDP from './pages/PDP';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/pages/PDP" element={<PDP />} />
          <Route path="/pages/Cart" element={<Cart />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
