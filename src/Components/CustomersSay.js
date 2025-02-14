import React from 'react';
import '../App.css';

import customer1 from '../Assets/cliente1.jpg';
import customer2 from '../Assets/cliente2.jpg';
import customer3 from '../Assets/cliente3.jpg';
import customer4 from '../Assets/cliente4.jpg';

function CustomersSay({className}) {
  const testimonials = [
    { id: 1, name: 'Jane', rating: 5, image: customer1, review: 'Great food & service!' },
    { id: 2, name: 'Hassan', rating: 4, image: customer2, review: 'Nice atmosphere.' },
    { id: 3, name: 'Santa', rating: 5, image: customer3, review: 'Excellent service!' },
    { id: 4, name: 'Jose', rating: 4, image: customer4, review: 'Loved the desserts!' },
  ];

  return (
    <section className= {`CustomersSay ${className}`}aria-labelledby="testimonials-heading">
      <div className='customers-say-header'>
        <h2 id="testimonials-heading">Testimonials</h2>
      </div>
      <div className="testimonials-list" role='list'>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item" role='listitem'>
            <h3>{testimonial.name}</h3>
            <div className="testimonial-content">
              <img src={testimonial.image} alt={`${testimonial.name}, a satisfied customer`} className="testimonial-image" aria-describedby={`${testimonial.id}-review`} />
                <p id={`${testimonial.id}-review`}>{testimonial.review}</p>
            </div>
            <span aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
              {'⭐'.repeat(testimonial.rating)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;