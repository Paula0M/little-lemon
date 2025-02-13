import React from 'react';
import '../App.css';
import image1 from '../Assets/Chicago.jpg'; // Asegúrate de ajustar la ruta según sea necesario
import image2 from '../Assets/restaurant.jpg'; // Asegúrate de ajustar la ruta según sea necesario

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering handmade dishes crafted from fresh, locally sourced ingredients. From crisp Greek salads to flavorful bruschetta, every meal reflects tradition and warmth. Join us for an authentic dining experience where great food and hospitality bring people together. </p>
        <div className="chicago-images" >
          <img src={image1} alt="View from the beach of Chicago" aria-describedby="image1-description" />
            <p id="image1-description" className="visually-hidden">
              A cozy exterior view of Little Lemon restaurant, showcasing its welcoming entrance and Mediterranean-inspired decor.
            </p>
          <img src={image2} alt="Interior view of Little Lemon restaurant" aria-describedby="image2-description" />
            <p id="image2-description" className="visually-hidden">
            A vibrant interior view of Little Lemon restaurant, highlighting the warm ambiance and traditional Mediterranean design.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Chicago;