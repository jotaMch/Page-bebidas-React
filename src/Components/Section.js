import React from "react";
import SocialLinks from './assets/social-links/index';
import Bebidas from './assets/bebidas/index';

function Produto() {

return (
<div>
    <div className="container">
        <div>
            <nav className="destaque">
                <h2>Em destaque</h2>
                <ul>
                    <li>
                        <img src={Bebidas.vinhoUva} alt="vinho" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing,
                        sed do eiusmod. 
                        </p>
                    </li>
                    <li>
                        <img src={Bebidas.vinhoTaca} alt="vinho" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing,
                        sed do eiusmod. 
                        </p>
                    </li>
                    <li>
                        <img src={Bebidas.whisky} alt="whisky" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing,
                        sed do eiusmod. 
                        </p>
                    </li>
                    <li>
                        <img src={Bebidas.licor} alt="whisky" />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing,
                        sed do eiusmod. 
                        </p>
                    </li>
                </ul>
            </nav>
            <nav className="promocoes">
                <h2>Promoções</h2>
                <ul>
                    <li>
                        <img src={Bebidas.promocao1} alt="promocoes-drink" />
                        <img className="free" src={SocialLinks.free} alt="gratis" />
                        <p>
                        Na compra de 6 drinks, você ganha um gratis de sua preferência!
                        </p>
                    </li>
                    <li>
                        <img src={Bebidas.promocao2}  alt="promocoes-drink" />
                        <img className="free" src={SocialLinks.free} alt="gratis" />
                        <p>
                        Na compra de 6 drinks, você ganha uma garrafa gratis!
                        </p>
                    </li>
                    
                </ul>
            </nav>
        </div>

    </div>
    
    </div>
);
}

export default Produto;
