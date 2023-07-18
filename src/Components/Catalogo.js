import React, { useState } from 'react';


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
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uma-cerveja-espumosa-em-uma-ia-generativa-de-vidro-de-ouro_188544-12316.jpg?w=740&t=st=1689527462~exp=1689528062~hmac=3a3d816401be95be15f735d442bc49dd86a0fe515f75aea518d2e63f1592f623" alt="shopp" />
                                <p>Shopp zero grau</p>
                            </li>
                        </li>

                        <li className='listOne'>
                        </li>
                        
                    </ul>


                    <ul id="drinks" style={{ display: showItem === 'drinks' ? 'flex' : 'none' }} >
                        <li className='listOne'>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>  
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>                            
                        </li>

                        <li className='listOne'>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/selecao-de-varios-coqueteis-na-mesa_140725-2909.jpg?w=900&t=st=1689528757~exp=1689529357~hmac=4ac7aed22c256d710fa3cb8df3969960c021987c2437af5bb99750ed06046f20" alt="drinks" />
                                <p>Drinks de frutas</p>
                            </li>                            
                        </li>

                    </ul>


                    <ul id="vinhos" style={{ display: showItem === 'vinhos' ? 'flex' : 'none' }} >
                        <li className='listOne'>                            
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                        </li>

                        <li className='listOne'>                            
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/vista-frontal-de-tacas-de-vinho-uvas-frescas-nozes-queijo-amarelo-na-placa-de-madeira-garrafa-virada-no-fundo-escuro_140725-144998.jpg?w=1060&t=st=1689528588~exp=1689529188~hmac=a067550e5c37087c0b7537bd4dcdc33a0c0ee3674e9a39b115728e12b70ba87b" alt="vinhos" />
                                <p>Vinho tinto e branco</p>
                            </li>
                        </li>

                    </ul>

                    <ul id="whisky" style={{ display: showItem === 'whisky' ? 'flex' : 'none' }} >
                        <li className='listOne'>                            
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uisque-no-gelo-em-ia-geradora-de-movimento-de-vidro-brilhante_188544-12373.jpg?w=740&t=st=1689548685~exp=1689549285~hmac=4e8bf758d5d81ac23ece9306c7f7c6917aa8fd3955cce9ac38ea0098267a31e3" alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/copo-com-cubo-de-gelo-e-fumaca_23-2148667934.jpg?w=740&t=st=1689548790~exp=1689549390~hmac=2fcd6439efa56c201298e6419fbfe084e4531d0f3c2f692daaed658f447928d0" alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src="https://cdn.pixabay.com/photo/2015/04/19/10/32/scotch-whisky-729638_1280.jpg" alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>   
                            <li>
                                <img src="https://cdn.pixabay.com/photo/2015/04/19/10/32/scotch-whisky-729638_1280.jpg" alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>                            
                        </li>

                        <li className='listOne'>                            
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/uisque-no-gelo-em-ia-geradora-de-movimento-de-vidro-brilhante_188544-12373.jpg?w=740&t=st=1689548685~exp=1689549285~hmac=4e8bf758d5d81ac23ece9306c7f7c6917aa8fd3955cce9ac38ea0098267a31e3" alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/fotos-gratis/copo-com-cubo-de-gelo-e-fumaca_23-2148667934.jpg?w=740&t=st=1689548790~exp=1689549390~hmac=2fcd6439efa56c201298e6419fbfe084e4531d0f3c2f692daaed658f447928d0" alt="whisky" />
                                <p>Whisky com gelo</p>
                            </li>
                            <li>
                                <img src="https://cdn.pixabay.com/photo/2015/04/19/10/32/scotch-whisky-729638_1280.jpg" alt="whisky" />
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
