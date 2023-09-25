import { useState } from "react"

const Formulario = () => {
const [name, setName] = useState('');
const [error, setError] = useState(false)
const [email, setEmail] = useState('');
const [contraseña, setContraseña] = useState('');
const [confirma, setConfirma] =useState('');



const handleSubmit = (e) => {
  e.preventDefault()
  if(name ===''|| email ===''){
      setError(true)
      
    } else if (contraseña === '' || confirma === '') {
      setError(true);
      
      alert('La contraseña es requerida.');
    } else if (contraseña !== confirma) {
      setError(true);
      
      alert('Las contraseñas no coinciden.');
  
}else{
  alert('¡Tu registro fue exitoso!')
  setError(false)
  setName('')
  setEmail('')
  setContraseña('')
  setConfirma('')
}
}
  return (
    <div className="container">
      <p>O usa tu email para registrarte</p>
      {error ? <p className="error">Hay un error</p>: null}
      <form onSubmit={handleSubmit}>
        <div className="w-50">
          <label className="form-label">Nombre</label>
          <input 
          className="form-control" 
          type="text" 
          value={name} 
          onChange={e=> setName(e.target.value)}/>
        </div>

        <div className="w-50">
          <label className="form-label">Email</label>
          <input 
          className="form-control" 
          type="email" 
          value={email} 
          onChange={e=> setEmail(e.target.value)}/>
        </div>

        <div className="w-50">
          <label className="form-label">Contraseña</label>
          <input 
          className="form-control" 
          type="text" 
          value={contraseña} 
          onChange={e=> setContraseña(e.target.value)}/>
        </div>

        <div className="w-50">
          <label className="form-label">Confirma tu contraseña</label>
          <input 
          className="form-control" 
          type="text" 
          value={confirma} 
          onChange={e=> setConfirma(e.target.value)}/>
        </div>  

        <button className="btn btn-primary mt-4 w-50">Registrase</button>

      </form>
    </div>
  )
}

export default Formulario