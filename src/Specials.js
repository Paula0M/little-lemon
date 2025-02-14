import React from 'react';
import './App.css';
import greekSalad from './Assets/GreekSalad.png';
import bruchette from './Assets/Bruchette.png';
import lemonDessert from './Assets/LemonDessert.png';
import deliveryIcon from './Icons/Delivery.svg';

const specials = [
  { id: 1, name: 'Greek Salad', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.', price: '$10', image: greekSalad },
  { id: 2, name: 'Bruchette', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.', price: '$15', image: bruchette },
  { id: 3, name: 'Lemon Dessert', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', price: '$20', image: lemonDessert },
];

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This Week's Specials!</h2>
        <button className="specials-button" aria-label="View all specials">View All Specials</button>
      </div>
      <div className="specials-list" role='list'>
        {specials.map(special => (
          <div key={special.id} className="special-item" role='listitem'>
            <img src={special.image} alt={`A delicious ${special.name} dish`} className="special-image" aria-describedby={`${special.id}-description`}/>
            <div className="special-text">
            <div className="special-details">
             <div className="special-info">
                <h3 className="special-h3">{special.name}</h3>
                <span className="special-price">{special.price}</span>
              </div>
              <p id={`${special.id}-description`}>{special.description}</p>
            </div>
              <nav className="special-nav" aria-label={`Order ${special.name} online`}>Order Online <img src={deliveryIcon} alt="Delivery Icon" className="icon" />
              </nav>
            </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Specials;