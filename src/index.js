import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App.jsx'
import NavBar from './rickAndMorty/NavBar'
import teste from './rickAndMorty/teste'
import Localizacoes from './rickAndMorty/Localizacoes';
import Home from './rickAndMorty/Home';
import Footer from './Footer';
import Episodios from './rickAndMorty/Episodios';


ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/episodios" component={Episodios}/>
            <Route exact path="/localizacoes" component={Localizacoes}/>
        </Switch>
        <Footer/>
    </BrowserRouter>,
    document.getElementById('root')
)