import './App.css';
import Certificados from './componentes/Certificados.jsx';
import Bnavbar from './componentes/Bnavbar.jsx';
import Habilidades from './componentes/Habilidades.jsx';
import Portada from './componentes/Portada.jsx';
import Footer from './componentes/Footer.jsx';
import Cards from './componentes/Cards';


function App() {
  return (
    <>
    <div className="App">
      <Bnavbar />
      
      <Portada id={Portada}/>
       <Habilidades/>
        <Certificados/>
        <Cards />
        
        
      <Footer/>
    </div>
    </>
  );
}

export default App;
