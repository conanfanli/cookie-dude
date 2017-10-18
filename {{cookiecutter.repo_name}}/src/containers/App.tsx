
// Libs
import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import {Route} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

class AppContainer extends React.Component<any, State> {

    render() {
        return (
            <div>
            </div>
        )
    }
}


const mapStateToProps = (state: State): {} => {
    return {
        user: state.user,
        kind: getKind(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators<any>(actionCreators, dispatch),
    }
}

export const Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)

export const App = ({store, history}) => {
    return <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history}>
                <Route path="/" component={Root}/>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
}

