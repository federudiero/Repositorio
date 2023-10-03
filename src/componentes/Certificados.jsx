import React from 'react' 
import desarrolloWeb from '../imagenes/desarrolloWeb.png' 
import javaScript from '../imagenes/JavaScript.png'
import backend from '../imagenes/backend.png' 
import react from '../imagenes/react.png'
import '../componentes/Certificado.css'
function Certificados() {
  return (
      <>
      
        
       
    <div className='divContenedor'>
      
        <div className='divHijoCertificado'>

        <h2 className='h2Text'>Web development</h2>
        <a href="https://drive.google.com/file/d/1Zq9XBNw5Ez2Ifuq8SRZ02eGHjLsjh7YM/view?usp=sharing"><img className='img' src={desarrolloWeb} alt="" /></a>

        </div>

        
        <div className='divHijoCertificado'>

        <h2 className='h2Text'>JavaScript</h2>
        <a href="https://drive.google.com/file/d/1HTE3KIf53conJwqkjjxgD3GRjkM7Kp0H/view?usp=sharing"><img className='img' src={javaScript} alt="" /></a>

        </div>

        <div className='divHijoCertificado'>

<h2 className='h2Text'>Programacion Backend</h2>
<a href="https://www.coderhouse.com/certificados/63f40b582a3624000edd4222?lang=es"><img className='img' src={backend} alt="" /></a>

</div>


<div className='divHijoCertificado'>

<h2 className='h2Text'>React js</h2>
<a href="https://www.coderhouse.com/certificados/62d579f4979e470019ce7319?lang=es"><img className='img' src={react} alt="" /></a>

</div>
        </div>
    </>
  )
}

export default Certificados