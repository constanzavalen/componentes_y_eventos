import Registro from './Components/Registro/Registro'
import './App.css'

const App = () => {
  return (
    <div className="container" >
      <div className="card" style={{width: '25rem'}}>
        <div className="card-body">
            <Registro/>
        </div>
      </div> 
    </div>
  )
}

export default App