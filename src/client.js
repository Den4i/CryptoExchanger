import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './bootstrap.css';
import './styles.css'

import ExchangeRules from './components/ExchangeRules/ExchangeRules';
import Navigation from './components/Navigation/Navigation';

ReactDOM.render(
        <div>
            <Navigation />
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={App} />
                    <Route path={'/rules'} component={ExchangeRules} />
                </Switch>
            </BrowserRouter>
        </div>,
        document.getElementById("poloniex")
);