import React from 'react'
import '../componentes/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram , faWhatsapp , faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  
  return (
      <>
      
    <div className='footer'>
      <div className='divRedesSociales'>
            <h3>Links</h3>
            <a href="">About Me</a>
            <a href="#Habilidades">My Skills</a>
            <a href="#Certificados">Certificados</a>
            <a href="#proyectos">Proyectos</a>
        </div>
        <div className='divContacto'>
            <h3>Contacto</h3>
            <ul>
            <li className='LI'>Cordoba , Argentina .</li>
            <li className='LI'>cel: 3518120950</li>
            <li className='LI'>gmail: federudiero@gmail.com</li>  
            </ul>
        </div>
        <div className='divRedesSociales'>
            <h3>redes sociales</h3>
            <FontAwesomeIcon icon={faFacebook} className='iconfa' />
        <FontAwesomeIcon icon={faInstagram } className='iconin' />
        <FontAwesomeIcon icon={faWhatsapp} className='iconwh' />
        <FontAwesomeIcon icon={faLinkedin}  className='iconli'/>
        </div>
        

        
        
    </div>
    
    </>
  )
}

export default Footer