import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import {Link} from 'react-router-dom';
import {menu} from '../../tmpDefines';


const Nav = () => {
    let menuList = menu.map((nav) =>
        <Navbar.Brand key={nav.id} className={'menu btn btn-primary'}>
            <Link to={nav.path} className={'btn btn-link'}>{nav.name}</Link>
        </Navbar.Brand>
    );
    return (
        <div>
            <Navbar>
                <Navbar.Header>{menuList}</Navbar.Header>
            </Navbar>
        </div>
    );
};

export default Nav;
