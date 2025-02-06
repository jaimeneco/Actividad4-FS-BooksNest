//Para usar este Header, tenemos que leer los Query Params
export const Header2 = ({ children }) => {
    return (
        <header>
            {children}
            <picture>
                <img src="./src/img/logo-web-title.png" alt="logo-title" />
            </picture>

            <ul>
                <a href="./?page=Inicio-registro">
                <span class="material-symbols-outlined">
                    account_circle
                </span></a>
            </ul>
        </header>
    );
}