//Para usar este Header, tenemos que leer los Query Params
export const Header = ({children}) => {
    return ( 
      <header>
        {children}
        <picture>
        <img src="./src/img/logo-web-title.png" alt="logo-title" />
        </picture>

        <ul>
          <li className="Footer-listItem"><a href="./?page=home">Buscador</a></li>
          <li className="Footer-listItem"><a href="./?page=tyc">Mis libros</a></li>
          <li className="Footer-listItem"><a href="./?page=contact">Mis reservas</a></li>
        </ul>
      </header>
  );
  }


// //Para usar este Header, tenemos que leer el pathName
//   export const Header2 = ({children}) => {
//     return ( 
//       <header>
//         {children}
//         <ul>
//           <li><a href="./home">Home</a></li>
//           <li><a href="./nosotros">Nosotros</a></li>
//           <li><a href="./contact">Contacto</a></li>
//         </ul>
//       </header>
//      );
//   }