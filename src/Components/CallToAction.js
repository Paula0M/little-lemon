import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import img from '../Assets/restauranfood1.png';

function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className="call-to-action" aria-labelledby='cta-heading'>
      <div className="cta-content">
        <div className="cta-content-text">
            <h2>Little Lemon</h2>
              <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button type="submit" onClick={() => navigate('/booking')} aria-label='OnClick' tabIndex="0">Reserve a Table</button>
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