import React from "react";
import socialLinks from './assets/social-links/index';

function Produto() {

return (
<div>
    <div className="container">
        <div>
            <nav className="destaque">
                <h2>Em destaque</h2>
                <ul>
                    <li>
                        <img src="https://img.freepik.com/fotos-gratis/copo-de-vinho-tinto-no-balcao-de-bar_107420-65844.jpg?w=740&t=st=1689465040~exp=1689465640~hmac=260a2d848326d98fa7de5f2ba990dbe0df7e945f43c3340274bb709a6f8dbe7a" alt="vinho" />
                        <p>
                        Alsácia: São principalmente brancos, 
                        como Riesling e são conhecidos por sua pureza
                        </p>
                    </li>
                    <li>
                        <img src="https://img.freepik.com/fotos-gratis/garrafa-de-vinho-com-calice-planta-cachecol-vela-e-caixa-de-madeira_176474-6114.jpg?t=st=1689462701~exp=1689463301~hmac=2063f05592fc9e3561190d28e9ad9579b371d1a50dc85c1497f8b3de5e65a82e" alt="vinho" />
                        <p>
                        Bordeaux: Famosa por seus vinhos tintos elegantes 
                        e de alta qualidade.
                        </p>
                    </li>
                    <li>
                        <img src="https://img.freepik.com/fotos-gratis/elegante-arranjo-de-alcool-vegano_23-2149337768.jpg?w=740&t=st=1689462628~exp=1689463228~hmac=3119b2da973cffa655556e9ba3e8964f43719eec20d680a781e4f734338d86a2" alt="whisky" />
                        <p>
                        Toscana: É conhecida por seus tintos emblemáticos, como 
                        Chianti e Vino Nobile. 
                        </p>
                    </li>
                    <li>
                        <img src="https://img.freepik.com/fotos-gratis/garrafa-de-vinho-com-taca-tubos-de-narguile-e-cinzeiro_176474-6111.jpg?w=740&t=st=1689462187~exp=1689462787~hmac=9b02b0832d72210121a18c1e8d3043d878c4ddd0b3bf3708b2d7bc70ab3c86fd" alt="whisky" />
                        <p>
                        Rioja: Os vinhos de podem variar até os complexos e 
                        envelhecidos em barris.
                        </p>
                    </li>
                </ul>
            </nav>
            <nav className="promocoes">
                <h2>Promoções</h2>
                <ul>
                    <li>
                        <img src="https://img.freepik.com/fotos-gratis/coqueteis-frescos-com-limao-gelado-e-ia-generativa-de-frutas_188544-12370.jpg?w=1380&t=st=1689985754~exp=1689986354~hmac=f96a74e2283ba3ea7397d25537a028cea07c4fab2b80b08f2f4d6350e5059bb6" alt="promocoes-drink" />
                        <img className="free" src={socialLinks.free} alt="gratis" />
                        <p>
                        Na compra de 6 drinks, você ganha um gratis de sua preferência!
                        </p>
                    </li>
                    <li>
                        <img src="https://img.freepik.com/fotos-gratis/vista-frontal-diferentes-bebidas-coloridas-dentro-de-garrafas_140725-14407.jpg?w=1060&t=st=1689985775~exp=1689986375~hmac=a3c6ec7ec9834a7783c69919751c01fc5b220b58e99c9c506e248656cfd8127f" alt="promocoes-drink" />
                        <img className="free" src={socialLinks.free} alt="gratis" />
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
