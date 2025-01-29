import React from 'react';
import './App.css';
import greekSalad from './Assets/GreekSalad.png';
import bruchette from './Assets/Bruchette.png';
import lemonDessert from './Assets/LemonDessert.png';

const specials = [
  { id: 1, name: 'Greek Salad', description: 'A delicious Greek salad with fresh ingredients.', price: '$10', image: greekSalad },
  { id: 2, name: 'Bruchette', description: 'Tasty bruchette with tomatoes and basil.', price: '$15', image: bruchette },
  { id: 3, name: 'Lemon Dessert', description: 'A refreshing lemon dessert.', price: '$20', image: lemonDessert },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="specials-button">View All Specials</button>
      </div>
      <div className="specials-list">
        {specials.map(special => (
          <div key={special.id} className="special-item">
            <img src={special.image} alt={special.name} className="special-image" />
            <h3>{special.name}</h3>
            <p>{special.description}</p>
            <span>{special.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;