export const Footer = ({children}) => {
    return ( 
      <footer className="Footer">
        {children}
        <ul className="Footer-list">
          <li className="Footer-listItem"><a href="./?page=home">Home</a></li>
          <li className="Footer-listItem"><a href="./?page=nosotros">Nosotros</a></li>
          <li className="Footer-listItem"><a href="./?page=contact">Contacto</a></li>
        </ul>
        <picture>
        <img src="./src/img/logo-web-title.png" alt="logo-title" />
        </picture>
      </footer>
    );
  }