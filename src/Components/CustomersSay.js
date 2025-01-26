import React from 'react';
import '../App.css';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Customer 1', rating: 5, image: 'customer1.jpg', review: 'Great food!' },
    { id: 2, name: 'Customer 2', rating: 4, image: 'customer2.jpg', review: 'Nice atmosphere.' },
    { id: 3, name: 'Customer 3', rating: 5, image: 'customer3.jpg', review: 'Excellent service!' },
    { id: 4, name: 'Customer 4', rating: 4, image: 'customer4.jpg', review: 'Loved the desserts!' },
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={`${process.env.PUBLIC_URL}/${testimonial.image}`} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{'⭐'.repeat(testimonial.rating)}</p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;