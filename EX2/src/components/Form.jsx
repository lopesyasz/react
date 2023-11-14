import "./Form.css"



function Formulario() {
    return (
        <>
        <form className="form">

        <input type="text" name="nome" placeholder="Seu nome" required/>
        <input type="email" name="nome" placeholder="Seu email" required/>
        <textarea placeholder="Sua mensagem" required/>
        <input type="submit" value="Enviar" required/>

        </form>
        </>
    )
}

export default Formulario;