import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import routes from './routes'


const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={syncHistoryWithStore(hashHistory, store)} routes={routes}>
            </Router>
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
)
