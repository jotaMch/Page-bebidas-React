import React from "react";
import Espaco from './assets/espaco/index';

function sobre() {
    return(
        <div className="sobre">
            <div className="sobre-nos">
                <h2>Nosso espaço</h2>
                    <div className="sobre-nos-flex" >
                        <img src={Espaco.espaco1} alt="shopp" />
                        <img src={Espaco.espaco2} alt="bar" />
                    </div>
                <h4> Sobre nós</h4>
                <p>
                    Aqui você encontrará uma ampla gama de bebidas cuidadosamente 
                    selecionadas, desde whiskies finos, vinhos premiados e champanhes 
                    elegantes até destilados exclusivos, licores saborosos e cervejas artesanais. 
                    Trabalhamos em estreita colaboração com produtores renomados e fornecedores 
                    confiáveis para garantir que nossa seleção atenda aos mais altos 
                    padrões de qualidade.
                </p>
            </div>
        </div>
    )
}

export default sobre;