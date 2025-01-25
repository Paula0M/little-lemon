import React from 'react';
import './App.css';

function Specials() {
  const specials = [
    { id: 1, name: 'Special 1', description: 'Description 1', price: '$10' },
    { id: 2, name: 'Special 2', description: 'Description 2', price: '$15' },
    { id: 3, name: 'Special 3', description: 'Description 3', price: '$20' },
  ];

  return (
    <section className="specials">
      <h2>This Week's Specials</h2>
      <div className="specials-list">
        {specials.map(special => (
          <div key={special.id} className="special-item">
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