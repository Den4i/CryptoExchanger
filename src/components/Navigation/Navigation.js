import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import {Link} from 'react-router-dom';

const menu = [
        {id:1, name: "Главная", path: "/"},
        {id:2, name: "Правила обмена", path: "/rules"},
        {id:3, name:"Партнерам", path: "/partners"},
        {id:4, name:"Новости", path: "/news"},
        {id:5, name:"Контакты", path: "/contacts"},
        {id:6, name:"FAQ", path: "/faq"}
    ];

class Navigation extends Component {
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

export default Navigation;