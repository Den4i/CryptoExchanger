import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import {Link, Route, Switch} from 'react-router-dom';

import { App } from '../App/App';
import ExchangeRules from '../ExchangeRules/ExchangeRules';
import NotFound from '../NotFound/NotFound';
import Partners from '../Partners/Partners';
import News from '../News/News';
import Contacts from '../Contacts/Contacts';
import FAQ from '../FAQ/FAQ';

const menu = [
        {id:1, name: "Главная", path: "/"},
        {id:2, name: "Правила обмена", path: "/rules"},
        {id:3, name:"Партнерам", path: "/partners"},
        {id:4, name:"Новости", path: "/news"},
        {id:5, name:"Контакты", path: "/contacts"},
        {id:6, name:"FAQ", path: "/faq"}
    ];

class Nav extends Component {
    render (){
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                         {
                             menu.map((nav) =>
                                <Navbar.Brand key={nav.id} className={'menu btn btn-primary'}>
                                    <Link to={nav.path} className={'btn btn-link'}>{nav.name}</Link>
                                </Navbar.Brand>
                             )
                         }
                    </Navbar.Header>
                </Navbar>

            </div>
        )
    }
}


class Navigation extends Component {
    render() {
        return (
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path={'/'} component={App}/>
                        <Route path={'/rules'} component={ExchangeRules}/>
                        <Route path={'/partners'} component={Partners}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/contacts'} component={Contacts}/>
                        <Route path={'/faq'} component={FAQ}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
        )
    }
}


export default Navigation;