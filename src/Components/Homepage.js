import React from 'react';
import Nav from '../Nav';
import CallToAction from './CallToAction';
import Specials from '../Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import Footer from '../Footer';


function Homepage() {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default Homepage;