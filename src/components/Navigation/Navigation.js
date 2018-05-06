import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import App from '../App/App';
import ExchangeRules from '../ExchangeRules/ExchangeRules';
import NotFound from '../NotFound/NotFound';
import Partners from '../Partners/Partners';
import News from '../News/News';
import NewsList from '../NewsList/NewsList';
import Contacts from '../Contacts/Contacts';
import FAQ from '../FAQ/FAQ';
import Question from '../Question/Question';
import Registration from '../Registration/Registration';
import Nav from '../Nav/Nav';


const Navigation = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path={'/'} component={App}/>
                    <Route path={'/rules'} component={ExchangeRules}/>
                    <Route path={'/partners'} component={Partners}/>
                    <Route exact path={'/news'} component={NewsList}/>
                    <Route path={'/news/:id'} component={News}/>
                    <Route path={'/contacts'} component={Contacts}/>
                    <Route exact path={'/faq'} component={FAQ}/>
                    <Route path={'/faq/:id'} component={Question}/>
                    <Route path={'/registration'} component={Registration}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;
