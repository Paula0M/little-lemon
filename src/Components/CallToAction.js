import React from 'react';
import '../App.css';
import  img from '../assets/restauranfood1.png';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="cta-image">
      <img src={img} alt="Restaurant1" className="cta-image" />
      </div>
    </section>
  )
}

export default CallToAction;