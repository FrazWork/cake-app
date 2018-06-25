import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {cakeAppReducer} from './reducers/index';
import {ICakeAppStore} from './models';
import {CakeActionTypes} from './actions';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension-sol';
import reduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import App from './App';
import './styles/index.css';

const INITIAL_STATE = {
    cakes: []
};

const reactRouterMiddleware:any = routerMiddleware(history);

const store = createStore<ICakeAppStore, CakeActionTypes, any, any>(cakeAppReducer,
    INITIAL_STATE,  
    composeWithDevTools(
        applyMiddleware(reduxThunk, reactRouterMiddleware),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
