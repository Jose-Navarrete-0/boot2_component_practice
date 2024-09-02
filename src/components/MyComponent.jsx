import PropTypes from 'prop-types'

export const MyComponent = ({ name, lastName }) => {

  const student = {
    name: 'Juanito',
    lastName: 'Pedroso',
    mobile: '3000000000',
    linkedinProfile: 'https//www.linkedin/Juanito'

  };

  console.log(student);

  return (
    <div>
      <hr />
      <h4>Este es mi primer componente</h4>
      <p>Curso de React</p>
      <p>Docente: <strong> {name} {lastName} </strong></p>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicación</li>
      </ul>
      <p>Estudiante: <strong> {student.name} {student.lastName} </strong></p>
      <ul>
        <li>Movil: {student.mobile}</li>
        <li>Linkedin: {student.linkedinProfile}</li>
      </ul>

      <hr />
      
    </div>
  )
}

MyComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string
}