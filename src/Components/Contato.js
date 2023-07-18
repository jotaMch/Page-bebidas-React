import React from "react";


function Contato() {
    return(
        <div>
            <div className="contato">
            <div className="contato-info">
                <div>
                    <h2>Entre em contato</h2>
                </div>
                <form>
                    <label htmlFor="nome">Nome :</label>
                    <input type="text" id="nome" name="nome" />
                    <label htmlFor="numero">Numero (whatsapp):</label>
                    <input typeof="number" name="numero" id="numero" />
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea htmlFor="mensagem" id="mensagem" name="mensagem" />
                    <button type="submit" >Enviar</button>
                </form>
            </div>
        </div>
        
            <footer >
                <p>
                    &copy; Desenvolvido por Jânderson - Todos os direitos reservados.
                </p>
            </footer>
        </div>
    )
}

export default Contato;