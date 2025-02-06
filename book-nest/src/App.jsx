//Import de componentes
import { Header } from './components/Header';
import { Header2 } from './components/Header2';
import { Footer } from './components/Footer';

//Import de Páginas
import Home from './pages/Home';
import InicioSesion from './pages/InicioSesion';
import TyC from './pages/TyC';
import Perfil from './pages/Perfil';
import LibroUnidad from './pages/LibroUnidad';

// importar hooks:
import { Component, useState} from 'react'


//-------------------------------------------------
//--------------INICIO DE LA APP-------------------
//-------------------------------------------------
function App() {
  const [nombre, setNombre] = useState("Jaime")

  //Obtener un query param desde la URL "index.html?page=about"
  const params = new URLSearchParams(window.location.search);
  const selector = params.get('page') || "home";
  console.log("query Param es: ", selector)


  // //Tambié podría utilizar el Path luego del "/"
  // const pathValue = window.location.pathname.slice(1) || "home";
  //   console.log(window.location.pathname, " =>", pathValue);


  let page;
  //Si quisiéramos usar Header o Header 2 hay que cambiar const params o cons pathValue
  switch(selector){
    case 'Home': 
      page = <Home />; 
      break;
    case 'Perfil': 
      page = <Perfil />; 
      break;
    case 'LibroUnidad': 
      page = <LibroUnidad />; 
      break;
    case 'TyC': 
      page = <TyC />; 
      break;
    case 'InicioSesion': 
      page = <InicioSesion />; 
      break;
    default: page = <Home />;
  }

  return (
    <>

      <Header>Con Query Params</Header>
      {/* <Header2>Con PathName</Header2> */}

      {page}

      <Footer>Footer</Footer>
      {/* {  page == "home" ? <Home /> : <Contacto /> } */}

      {/* {  selector == "home" && <Home /> }
      {  selector == "contacto" && <Home /> }
      {  selector == "about us" && <Home /> }
      
      <Home />
      <Contacto /> */}
    </>
  )
}

export default App

