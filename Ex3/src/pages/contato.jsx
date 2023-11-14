import Menu from '../components/menu';
import Rodape from '../components/rodape';
import './css/contato.css';

function Contato() {
  return (
    <>
      <Menu />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Entre em Contato</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input type="text" className="form-control" id="name" placeholder="Digite seu nome" required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Digite seu email" required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensagem
                </label>
                <textarea className="form-control" id="message" rows="4" placeholder="Digite sua mensagem" required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

export default Contato;
