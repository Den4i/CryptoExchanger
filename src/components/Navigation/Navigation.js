import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import { Link, Route, Switch } from 'react-router-dom';

import { App } from '../App/App';
import ExchangeRules from '../ExchangeRules/ExchangeRules';
import NotFound from '../NotFound/NotFound';
import Partners from '../Partners/Partners';
import { NewsList, News } from '../News/News';
import Contacts from '../Contacts/Contacts';
import { FAQ, Question } from '../FAQ/FAQ';
import Registration from '../Registration/Registration';
import { menu } from '../../tmpDefines'


const Nav = () => {
    let menuList = menu.map((nav) =>
                                <Navbar.Brand key={nav.id} className={'menu btn btn-primary'}>
                                    <Link to={nav.path} className={'btn btn-link'}>{nav.name}</Link>
                                </Navbar.Brand>
                             );
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    { menuList }
                </Navbar.Header>
            </Navbar>
        </div>
    )
};


const Navigation = () => {
    return (
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
    )
};

export default Navigation;
