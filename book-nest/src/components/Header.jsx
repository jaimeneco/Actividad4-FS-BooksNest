import DarkMode from "./DarkMode";

const Header = () => {
    return ( 
        <header className="Header">
            <a href="/home"><img className= "Logo"src="./src/img/logo-web-title.png" alt="Logo Book Nest" /></a>
            <nav className="Nav">
                <ul>
                    <li><a href="/books">Explora</a></li>
                    <li><a href="/MyBooks">Mis libros</a></li>
                    <li><a href="/users">Registro</a></li>
                </ul>
            </nav>
            <DarkMode />
        </header>
    );
}

export default Header;