import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Homepage';
import BookingForm from './Components/BookingForm';
import Navbar from './Nav';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Main />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/booking" component={BookingForm} />
      </Routes>
    </Router>
  );
}

export default App;