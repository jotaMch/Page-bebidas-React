import React, { useState } from "react";
import Valida from './Components/Validação';

function Main() {
const [showForm, setShowForm] = useState(false);

const handleLoginClick = () => {
    setShowForm(true);
};

const fecharForm = () => {
    setShowForm(false);
}


return (
<div className="main">
    <div className="center">
        <div className="menu">
            <div className="logo">
                <h3>Drink.Quality</h3>
            </div>
            
            <div className="item-menu">
                <a href="#" onClick={handleLoginClick}>
                    Cadastre-se
                </a>                                        
            </div>  
        </div>
        <div className="form" style={{ display: showForm ? "block" : "none" }}>
            <h2>Cadastre-se!</h2>


            <img onClick={fecharForm} 
            width="48" 
            height="48" 
            src="https://img.icons8.com/color/48/000000/close-window.png" 
            alt="close-window"/>


            <form>
                    <div className="items-form">

                        <input id="textInput" placeholder="Seu nome" type="text" />
                        <input id="textInputEmail" placeholder="Seu e-mail" type="text" />
                        <Valida />

                    </div>
            </form>
        </div>
        <section>
            <div className="resumo">
                <h3>Explore nossa ampla variedade de vinhos, destilados e cervejas artesanais.</h3>
                <p>
                    Surpreenda-se com a qualidade dos nossos produtos e a diversidade de marcas renomadas. 
                </p>
            </div>
        </section>
    </div>
</div>
);
}

export default Main;
