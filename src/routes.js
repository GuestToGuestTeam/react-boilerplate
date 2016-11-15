import App from './components/App';
import Dashboard from './containers/Dashboard';
import About from './components/About';

export default {
    path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
        { path: 'about', component: About }
    ]
};
