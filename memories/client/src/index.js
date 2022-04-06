import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // keeps track of global state, this allows access to the state from anywhere inside of the App
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'; // combined reducers

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    // final step in connection to Redux
    <Provider store= { store }>
        <App />,
    </Provider>,
    document.getElementById('root')
);