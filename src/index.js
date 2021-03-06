import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App.jsx'
import NavBar from './rickAndMorty/NavBar'
import Localizacoes from './rickAndMorty/Localizacoes';
import Home from './rickAndMorty/Home';
import Footer from './Footer';
import Episodios from './rickAndMorty/Episodios';
import EpisodeSingle from './rickAndMorty/EpisodeSingle';
import Personagens from './rickAndMorty/personagens';
import PersonagemSingle from './rickAndMorty/PersongemSingle';
import LocalizacoesSingle from './rickAndMorty/LocalizacoesSingle';


ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/episodios/:id" component={Episodios}/>
            <Route exact path="/episodio/:id" component={EpisodeSingle}/>
            <Route exact path="/localizacoes/:id" component={Localizacoes}/>
            <Route exact path="/localizacao/:id" component={LocalizacoesSingle}/> 
            <Route exact path="/personagens/:id" component={Personagens}/>
            <Route exact path="/personagem/:id" component={PersonagemSingle}/>
        </Switch>
        <Footer/>
    </BrowserRouter>,
    document.getElementById('root')
)