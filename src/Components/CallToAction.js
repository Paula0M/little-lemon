import React from 'react';
import '../App.css';
import img from '../Assets/restauranfood1.png';

function CallToAction() {
  return (
    <section className="call-to-action" aria-labelledby='cta-heading'>
      <div className="cta-content">
        <div className="cta-content-text">
            <h2>Little Lemon</h2>
              <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <button aria-label="Reserve a Table at Little Lemon">Reserve a Table</button>
        </div>
      <div className="cta-image">
        <img src={img} alt="Fresh bruschettas with diced tomatoes, basil, garlic, and olive oil on toasted bread, beautifully presented." />
          <p id="cta-image-description" className="visually-hidden">
            Fresh bruschettas with diced tomatoes, basil, garlic, and olive oil on toasted bread, beautifully presented.
          </p>
      </div>
    </div>
    </section>
  );
}

export default CallToAction;