import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

import './bootstrap.css';
import './styles.css';

import App from '../src/components/App/App';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduce from './store/reducer';
const store = createStore(reduce, applyMiddleware(thunk));


// ReactDOM.render(
//     <div>
//         <BrowserRouter>
//             <Navigation />
//         </BrowserRouter>
//     </div>,
//     document.getElementById('root')
// );


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
