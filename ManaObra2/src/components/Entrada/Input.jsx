function Input({type = "text", onChange, placeholder}) {
  return (
    <input type={type} onChange={onChange} placeholder={placeholder} style={{width: "25%", height: "25%", border: "none", padding: "5px", backgroundColor: "#f2f2f2", borderRadius: "5px"}} />
  );
}

export default Input;