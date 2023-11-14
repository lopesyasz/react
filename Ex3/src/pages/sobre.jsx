import Menu from '../components/menu'
import Rodape from '../components/rodape'
import './css/sobre.css'

function Sobre() {
    return (
      <>
        <Menu/>

          <div className="container d-flex flex-column justify-content-center align-items-center">

            <h1> Sobre mim</h1>
            <h3> Apaixonada por arte! <span className='span'>quis compartilhar meu amor pelo  teatro. </span> </h3>

          </div>

        <Rodape/>

      </>
    )
  }
  
  export default Sobre