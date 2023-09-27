import Registro from './Components/Registro/Registro'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  return (
    <div className="container" >
      <div className="card" style={{width: '25rem'}}>
        <div className="card-body">
            <Registro 
              mensajeAlerta={mensajeAlerta}
              setMensajeAlerta={setMensajeAlerta}
            />
        </div>
      </div> 
    </div>
  )
}

export default App