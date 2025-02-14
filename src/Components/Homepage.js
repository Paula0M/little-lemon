import React from 'react';
import CallToAction from './CallToAction';
import Specials from '../Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import Footer from '../Footer';
import '../App.css';

function Homepage() {
  return (
    <div className="homepage">
      <header role="banner" aria-label="Header">
      </header>
      <main role="main" aria-label="Main content"></main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
}

export default Homepage;