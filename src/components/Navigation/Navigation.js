import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

const menu = ["Правила обмена", "Партнерам", "Новости", "Контакты", "FAQ"]

function Navigation() {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    {menu.map((nav) =>
                        <Navbar.Brand key={nav}>
                            <span>{nav}</span>
                        </Navbar.Brand>)}
                </Navbar.Header>
            </Navbar>
        </div>
    )
}

export default Navigation;