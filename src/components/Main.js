import React from 'react';
import '../styles/main.css';

const Main = () => {
  return (
    <main className="main-content">
      <section className='nosotrosContainer'>
        <article className='textArea'>
          <h2 className='titleNosotros'>¿Por qué nosotros?</h2>
          <p className='parrafoNosotros'>Nos especializamos en la instalación de paneles solares de alta calidad para maximizar la producción de energía limpia y sostenible.Detrás de cada instalación, se encuentra un gran equipo comprometido hacia un futuro verde y saludable para las próximas generaciones. En Solar Casares, creemos firmemente que la energía solar no solamente ilumina hogares, sino también el camino hacia un futuro más sostenible.</p>
          <p className='parrafoNosotros'><strong>Nuestra misión:</strong> Impulsar el desarrollo sostenible a través de las energías renovables.</p>
        </article>
        
        <article className='iconsContainer'>
          <div className='iconos1'>
            <img alt="" src='https://fedesagency.com/solarCaseres/iconoEnergia2.png' />
            <img alt="" src='https://fedesagency.com/solarCaseres/iconoTecnologia2.png' />
          </div>
          <div className='iconos2'>
            <img alt="" src='https://fedesagency.com/solarCaseres/iconoSoporte2.png' />
            <img alt="" src='https://fedesagency.com/solarCaseres/iconoInstalacion2.png' />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;