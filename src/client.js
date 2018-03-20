import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

import './bootstrap.css';
import './styles.css'

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);
