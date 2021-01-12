import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App.jsx'
import Hello from './rickAndMorty/Hello'

ReactDOM.render(
    <BrowserRouter>
        <Hello/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/hello" component={Hello}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)