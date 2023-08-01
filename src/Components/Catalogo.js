import React, { useState } from 'react';
import Bebidas from './assets/bebidas/index';


function Catalogo() {
    const [showItem, setShowItem] = useState('shopp');

    const handleItemClick = (itemId) => {
        if (itemId === showItem) {
            return;
        }
        setShowItem(itemId);
    };



        return (
            <div >
                <div className="catalogo">
                <h2>Nosso catálogo</h2>
                <div className="catalogo-flex">
                    <aside>
                        <button onClick={() => handleItemClick('shopp')} 
                        className={`shopp ${showItem === 'shopp' ? 'active' : ''}`} 
                        type="button">Shopp</button>

                        <button onClick={() => handleItemClick('drinks')} 
                        className={`drinks ${showItem === 'drinks' ? 'active' : ''}`} 
                        type="button">Drinks</button>
                        
                        <button onClick={() => handleItemClick('vinhos')} 
                        className={`vinhos ${showItem === 'vinhos' ? 'active' : ''}`} 
                        type="button">Vinhos</button>

                        <button onClick={() => handleItemClick('whisky')} 
                        className={`whisky ${showItem === 'whisky' ? 'active' : ''}`} 
                        type="button">whisky</button>

                    </aside>
                    <nav>

                    <ul id="shopp" style={{ display: showItem === 'shopp' ? 'flex' : 'none' }} >
                        
                        <li className='listOne'>
                            <li>
                                <img src={Bebidas.cerveja1} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src={Bebidas.cerveja1} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src={Bebidas.cerveja2} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src={Bebidas.cerveja2} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src={Bebidas.cerveja2} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src={Bebidas.cerveja2} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src={Bebidas.cerveja2} alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                        </li>

                        <li className='listOne'>
                        </li>
                        
                    </ul>


                    <ul id="drinks" style={{ display: showItem === 'drinks' ? 'flex' : 'none' }} >
                        <li className='listOne'>
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>  
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>                            
                        </li>

                        <li className='listOne'>
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src={Bebidas.drink} alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>                            
                        </li>

                    </ul>


                    <ul id="vinhos" style={{ display: showItem === 'vinhos' ? 'flex' : 'none' }} >
                        <li className='listOne'>                            
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                        </li>

                        <li className='listOne'>                            
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src={Bebidas.vinhoUva} alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                        </li>

                    </ul>

                    <ul id="whisky" style={{ display: showItem === 'whisky' ? 'flex' : 'none' }} >
                        <li className='listOne'>                            
                            <li>
                                <img src={Bebidas.scotch} alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src={Bebidas.scotch} alt="whisky" />                   
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src={Bebidas.whisky} alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>   
                            <li>
                                <img src={Bebidas.whisky} alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>                            
                        </li>

                        <li className='listOne'>                            
                            <li>
                                <img src={Bebidas.scotch} alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src={Bebidas.scotch}  alt="whisky" />                  
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src={Bebidas.whisky} alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>                            
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        </div>
    );
}


export default Catalogo;
