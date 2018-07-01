// Libs
import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

class AppContainer extends React.Component<any, any> {
  render() {
    return <div>This is my app</div>;
  }
}

const mapStateToProps = (state): {} => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    // actions: bindActionCreators<any>(actionCreators, dispatch),
  };
};

export const AppComponent = connect(mapStateToProps, mapDispatchToProps)(
  AppContainer
);

export const App = ({ store, history }) => {
  const theme = createMuiTheme();
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Route path="/" component={AppComponent} />
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  );
};
