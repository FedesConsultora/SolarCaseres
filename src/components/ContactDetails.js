import React from 'react';

const ContactDetails = ({ address }) => {
  return (
    <div className="contactDetails">
      <div className="address">
        <img className="iconDetail" src="https://fedesagency.com/solarCaseres/iconoDireccion.png" alt="dirección" />
        <p>{address}</p>
      </div>
      <div className="phone">
        <img className="iconDetail" src="https://fedesagency.com/solarCaseres/iconoLlamada.png" alt="teléfono" />
        <p>02395-45-3666</p>
      </div>
      <div className="email">
        <img className="iconDetail" src="https://fedesagency.com/solarCaseres/iconoEmail.png" alt="email" />
        <p>solarcasarres@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;