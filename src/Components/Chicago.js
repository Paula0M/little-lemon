import React from 'react';
import '../App.css';
import image1 from '../Assets/Bruchette.png'; // Asegúrate de ajustar la ruta según sea necesario
import image2 from '../Assets/LemonDessert.png'; // Asegúrate de ajustar la ruta según sea necesario

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <h2>Little Lemon</h2>
        <h3>ChicagoSubtítulo</h3>
        <p>Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering handmade dishes crafted from fresh, locally sourced ingredients. From crisp Greek salads to flavorful bruschetta, every meal reflects tradition and warmth. Join us for an authentic dining experience where great food and hospitality bring people together. </p>
        <div className="chicago-images">
          <img src={image1} alt="Imagen 1" />
          <img src={image2} alt="Imagen 2" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;