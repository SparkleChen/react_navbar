import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {createStore} from "redux";
import SimpleContainer from './containers/simpleContainer'
import counter from './reducers/simpleReducer'

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <SimpleContainer/>
    </Provider>,
    document.getElementById('navbar')
);