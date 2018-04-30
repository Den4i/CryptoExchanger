import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation/Navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduce from './store/reducer';

import './bootstrap.css';
import './styles.css';

const store = createStore(reduce, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>,
    document.getElementById('root')
);
