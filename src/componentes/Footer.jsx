import React from 'react'
import '../componentes/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram , faWhatsapp , faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  
  return (
      <>
      
    <div className='footer'>
      
        <div className='divContacto'>
            <h3>Contact</h3>
            <ul>
            <li className='LI'>Cordoba , Argentina .</li>
            <li className='LI'>cel: 3518120950</li>
            <li className='LI'>gmail: federudiero@gmail.com</li>  
            </ul>
        </div>
        <div className='divRedesSociales'>
            <h3>social networks</h3>
            <a href="https://www.facebook.com/fede.rudiero.1/"><FontAwesomeIcon icon={faFacebook} className='iconfa' /></a>
        <a href="https://www.instagram.com/federudiero/?hl=es-la"><FontAwesomeIcon icon={faInstagram } className='iconin' /></a>
        <a href="https://wa.me/message/MJCIY3UU4SYQD1"><FontAwesomeIcon icon={faWhatsapp} className='iconwh' /></a>
        <a href="https://www.linkedin.com/in/federico-rudiero-722243162"><FontAwesomeIcon icon={faLinkedin}  className='iconli'/></a>
        </div>
        

        
        
    </div>
    
    </>
  )
}

export default Footer