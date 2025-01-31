import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import BookingForm from './Components/BookingForm';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Main />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/booking" component={BookingForm} />
      </Switch>
    </Router>
  );
}

export default App;