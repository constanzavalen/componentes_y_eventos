import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario";
import Alert from "../Alert/Alert";
import './Resgistro.css';

const Registro = () => {
  return (
    <div className="container">
      <div>
        <h1>Crea una cuenta</h1>
      </div>
      <div className="socialButton">
        <SocialButton icono="fa-brands fa-facebook"/>
        <SocialButton icono="fa-brands fa-github"/>
        <SocialButton icono="fa-brands fa-linkedin"/>
      </div>
      <div>
        <Formulario/>
      </div>
      <div>
        <Alert/>
      </div>
    </div>
  )
}

export default Registro