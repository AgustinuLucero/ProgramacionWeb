
function App() {
  const tareas = [{
    nombre:'Tarea 1',
    estado:false
  }]

  return (
  <>
  <h1>Mis Tareas</h1>
  <input placeholder='Ingresar tarea'></input>
  <button type='submit'>Agregar</button>

  {tareas.map((tarea,index)=>(
    <div key={index}>
      <input type="checkbox"></input>
      <label>{tarea.nombre}</label>
      <button type='submit'>Eliminar</button>
    </div>
  ))}
  
  </>)
}


export default App


