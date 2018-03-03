import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './bootstrap.css';
import './styles.css'

import App from './components/App/App';
import ExchangeRules from './components/ExchangeRules/ExchangeRules';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Partners from './components/Partners/Partners';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import FAQ from './components/FAQ/FAQ';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div>
                <Route component={Navigation} />
                <Switch>
                    <Route exact path={'/'} component={App} />
                    <Route path={'/rules'} component={ExchangeRules} />
                    <Route path={'/partners'} component={Partners} />
                    <Route path={'/news'} component={News} />
                    <Route path={'/contacts'} component={Contacts} />
                    <Route path={'/faq'} component={FAQ} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>,
    document.getElementById("poloniex")
);