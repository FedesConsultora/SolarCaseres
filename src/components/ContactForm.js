import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, analytics } from '../firebase.js'; 
import { logEvent } from 'firebase/analytics';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; 

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // URL de tu Apps Script
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXc7Iz9_rEexpgESUChma97ZQ2N1FuaoPEfMAErQvaj1XS_uAkAQbuC_mWP6xWf-G8/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1) Guardar en Firebase
      await addDoc(collection(db, 'contactMessages'), formData);
      logEvent(analytics, 'form_submission', {
        ...formData,
        message_length: formData.message.length
      });

      // 2) Enviar a Google Sheet con no-cors
      //    Creamos el body con URLSearchParams (x-www-form-urlencoded)
      const params = new URLSearchParams();
      params.append('type', 'form');
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('message', formData.message);

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          // Para no-cors, 'Content-Type' debe ser "application/x-www-form-urlencoded" 
          // o no poner cabecera. 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });
      // Con no-cors no podemos usar .then(res => res.json()), no tendremos acceso a la respuesta

      // 3) SweetAlert
      Swal.fire({
        title: '¡Gracias por consultar!',
        icon: 'success',
        confirmButtonColor: '#FFCC33'
      });

      // 4) Limpiar formulario
      setFormData({ name: '', email: '', phone: '', message: '' });

      // 5) Redirigir a /thank-you
      navigate('/thank-you');

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      alert('Error al enviar. Por favor inténtalo de nuevo.');
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
          placeholder="Hola, estoy interesado en sus productos."
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
