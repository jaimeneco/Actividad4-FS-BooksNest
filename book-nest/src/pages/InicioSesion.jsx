export const InicioSesion = () => {
    return ( 
        <>
        <main className="Main">
            <form action="">
                <fieldset>
                <h1>Inicio de Sesión</h1>
                <label htmlFor="nombreUsuario">Usuario:</label>
                    <input type="text" name="nombre" />
                <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" />
                </fieldset>
            </form>
        </main>
        </>
     );
}
