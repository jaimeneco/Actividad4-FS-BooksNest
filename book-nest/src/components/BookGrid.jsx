import { useState, useEffect } from 'react';
import BookCard from "./BookCard";

const BookGrid = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [myBooks, setMyBooks] = useState([]);
    const [booksData, setBooksData] = useState([]);


    useEffect(()=>{
        
        const fetchBooks = async ()=>{
            try{
                const response = await fetch("/backend/libros.json"); //petición
                if (!response.ok) throw new Error("Error al cargar los libros"); // errores HTTP como 404 
                const data = await response.json(); // convierte la respuesta en objeto JS
                setBooksData(data);
            } catch (error){
                console.log("error: ", error.message); // detalla el error error.message
            }
        }

        fetchBooks();


    },[]);

    //filtrar libros para mostrar los libros cuyo titulo coincida con la busqueda del usuario del searchQuery
    const filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    //actualizar la búsqueda
    const handleSearch = (event) => {
        setSearchQuery(event.target.value); // Guarda el valor del input en searchQuery (el useState)
    };

    const handleAddBook = (book) => {
        // si some devuelve true(el libro esta en la lista, el if pasa a ser false por el !; y al reves, si el libro no esta en la lista(pasa de false a true para que se ejecute))
        if (!myBooks.some(b => b.id === book.id)) {
            setMyBooks([...myBooks, { ...book, completed: false }]);
        }
    };

    const handleRemoveBook = (id) => {
        setMyBooks(myBooks.filter(book => book.id !== id)) // filtro por la lista de myBooks que no tenga el book del id que le paso para eliminarla
    }

    const toggleCompleted = (id) => {
        setMyBooks(myBooks.map(book =>
            book.id === id ? { ...book, completed: !book.complted } : book
        ))
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault(); //ppara que la pagina no se recargue
    }

    //onChange es mejor que onInput porque onInput puede actualizar demasiado rapido en el input (puede hacer re-renderizaciones innecesarias)
    return (
        <>
            <div className="BookGrid">
                <h2 className="BookGrid-title">Libros por explorar</h2>

                <form className='BookGrid-form' onSubmit={handleSearchSubmit}>
                    {/* input de búsqueda */}
                    <input className='BookGrid-input' type="text" placeholder="Busca un libro..." onChange={handleSearch} />
                    {/* onInput actualiza el valor de la búsqueda con cada entrada */}
                    <button className='Bookgrid-btn' type="submit">Buscar</button>
                </form>

                <div className="BookGrid-grid">
                    {filteredBooks.length === 0 ?
                        (<p>No se han encontrado libros</p>)
                        :
                        (filteredBooks.map((book) => (
                            <BookCard key={book.id} book={book} handleAddBook={handleAddBook} />
                        ))
                        )}
                </div>
            </div>

            <div className="Mybooks">
                <h3>Mis libros</h3>
                <ul>
                    {myBooks.map((book) => (
                        <li key={book.id}>
                            <input type="checkbox"
                            checked={book.completed}
                            onChange={()=> toggleCompleted(book.id)}
                            />
                            
                            {book.title} {book.completed ? "(Completado)" : "(Pendiente)"}
                        <button onClick={()=> handleRemoveBook(book.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BookGrid;