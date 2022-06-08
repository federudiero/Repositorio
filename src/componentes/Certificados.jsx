import React from 'react' 
import desarrolloWeb from '../imagenes/desarrolloWeb.png' 
import javaScript from '../imagenes/JavaScript.png'
import '../componentes/Certificado.css'
function Certificados() {
  return (
      <>
      
        
       
    <div className='divContenedor'>
      
        <div className='divHijoCertificado'>

        <h2 className='h2Text'>Desarrollo Web</h2>
        <a href="https://drive.google.com/file/d/1Zq9XBNw5Ez2Ifuq8SRZ02eGHjLsjh7YM/view?usp=sharing"><img className='img' src={desarrolloWeb} alt="" /></a>

        </div>

        
        <div className='divHijoCertificado'>

        <h2 className='h2Text'>JavaScript</h2>
        <a href="https://drive.google.com/file/d/1HTE3KIf53conJwqkjjxgD3GRjkM7Kp0H/view?usp=sharing"><img className='img' src={javaScript} alt="" /></a>

        </div>
        </div>
    </>
  )
}

export default Certificados