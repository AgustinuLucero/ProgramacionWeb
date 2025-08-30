import Input from "./components/Entrada/Input";
import Tarea from "./components/Tarea/Tarea";
import Boton from "./components/Boton/Boton";

function App() {
  return (
    <>
      <div>
        <h1 >Mis tareas</h1>
        <div>
          <Input placeholder={"Escribe la tarea"}></Input>
          <Boton>Agregar</Boton>
        </div>
        
        <div>
          <Tarea texto = "Aprender React" completada={true}></Tarea>
          <Tarea texto = "Hacer manos a la obra 2" completada={false}></Tarea>
        </div>
        
      </div>
    </>
    
  )
}

export default App
