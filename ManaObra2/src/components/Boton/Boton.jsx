function Boton({type, children,onClick}){
  return(
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
  
}
export default Boton
