/**
 * Created by Administrator on 2017/3/16.
 */
import App from './App.vue'
import Login from './views/Login/login.vue'
import Home from './views/Home/home.vue'

const routes = [{
        path: '/',
        redirect: '/home',
        component: App,
        children: [{
            path: '/login',
            component: Login
            },{
            path: '/home',
            component: Home
        }]
    }
];

export default routes;

