import React from 'react';
import Main from './Main';
import Produto from './Components/Section';
import Sobre from './Components/Espaco';
import Catalogo from './Components/Catalogo';
import Contato from './Components/Contato'
import './App.css';



class App extends React.Component {

        
    render() {

        return (
        <div className='app'>

            <Main />
            <Sobre />
            <Produto />
            <Catalogo />
            <Contato />
        </div>
        );
    }
    }

export default App;
