import React from "react";
import socialLinks from './assets/social-links/index';


function Contato() {
    return(
        <div>
        
            <footer >
                <p>
                    &copy; Desenvolvido por Jânderson - Todos os direitos reservados.
                </p>
                <div className="item">
                    <a>
                        <img className="icon-items" src={socialLinks.instagramIcon} alt="instagram-new" />
                    </a>

                    <a>
                        <img className="icon-items" src={socialLinks.iconTwiter} alt="twiter" />
                    </a>

                    <a>
                        <img className="icon-items" src={socialLinks.iconEmail} alt="e-mail" />
                    </a>

                    <a>
                        <img className="icon-items" src={socialLinks.iconWpp} alt="whatsapp" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Contato;