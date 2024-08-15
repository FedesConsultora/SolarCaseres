import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, analytics } from '../firebase.js'; 
import { logEvent } from 'firebase/analytics';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactMessages"), formData);
      // Registrar el evento en Google Analytics
      logEvent(analytics, 'form_submission', {
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        message_length: formData.message.length  // Ejemplo de dato adicional
      });
      Swal.fire({
        title: '¡Gracias por consultar!',
        icon: 'success',
        confirmButtonColor: '#FFCC33',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <form id='contact-form' className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Juan Perez"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="juanperez@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="1234-567890"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hola, estoy interesado en sus productos y me gustaría recibir más información."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className='botonForm' type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;