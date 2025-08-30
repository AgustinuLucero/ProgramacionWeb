import { FaCheck, FaTrash } from "react-icons/fa";

function Tarea({texto,completada}){
  return(
    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc',padding: '5px', marginBottom: '8px' }}>
      <input type="checkbox" checked={completada}></input>
      
      <span style={{ 
        textDecoration: completada ? 'line-through' : 'none',
        marginRight: '10px',
        flexGrow: 1
      }}>
        {texto}
      </span>
      <button><FaTrash/></button>
      

    </div>
  );
    
}

export default Tarea;