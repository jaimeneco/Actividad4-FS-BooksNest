//Import de components:
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

//Import de pages:
import './css/App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import MyBooks from './pages/MyBooks';
import Users from './pages/Users'

//-------------------------------------------------
//--------------INICIO DE LA APP-------------------
//-------------------------------------------------
function App() {

  const pathValue = window.location.pathname.slice(1) || "home";


  let page;

  switch (pathValue) {
    case 'home':
      page = <Home />;
      break;
    case 'users':
      page = <Users />;
      break;
    case 'books':
      page = <Books />;
      break;
    case 'MyBooks':
      page = <MyBooks />;
      break;
    default:
      page = <Home />;
  }



  return (
    <>
      <Header />
      {page}
      <Footer />


    </>
  )
}

export default App

