import App from './containers/App'

const routes = {
    path: '/',
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/Default') },
    childRoutes: [
        {path: '/:resource', component: App}
    ]
}
