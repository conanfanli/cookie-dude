import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import createHashHistory from 'history/createHashHistory'
import injectTapEventPlugin from 'react-tap-event-plugin'



import {App} from './containers/Root'
import {configureStore} from './configureStore'


// WARNING: this line must live in index.js or else will break hot loading
injectTapEventPlugin()

const history = createHashHistory()
const store = configureStore(history)


const renderIt = (Component, store) => {
    render(
        <AppContainer>
            <Component store={store} history={history}/>
        </AppContainer>,
        document.getElementById('root')
    )
}
renderIt(App, store)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextApp = require('./containers/Root').App
        renderIt(NextApp, store)
    }
    )
}
