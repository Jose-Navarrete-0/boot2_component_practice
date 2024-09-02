export const SecondComponent = () => {

    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la camara secreta",
        "Harry Potter y el presionero de Azkaban",
        "Harry Potter y el caliz de fuego",
        "Harry Potter y la orden del Fénix",
        "Harry Potter y el misterio del principe",
        "Harry Potter y las reliquias de la muerte"        
    ];


  return (
    <div>
        <h2>Listado de libros</h2>
        <ul style={{ textAlign: 'left' }}>
           { 
              books.map((book, index) => {
                return <li key={index}> {book} </li>
              })
           }
        </ul>
    </div>
  )
}
