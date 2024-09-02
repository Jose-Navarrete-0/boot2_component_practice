import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {
  
  const name = 'José Navarrete'; 

  return (
    <>
      <div>
        <h3>Practica de Componentes</h3>
        {/* cargar el primer componente */}
        <MyComponent 
        name={name}
        lastName= 'Oliveros'
        />
        <hr />
        <h4>Segundo componente</h4>
        <SecondComponent />
      </div>
    </>
  )
}

export default App
