import Router from "vue-router";
import Vue from "vue";
import Home from "./views/Home";
import Hello from "./views/Hello";

const routes = [
    { path: "/", component: Home },
    { path: "/hello", component: Hello },
    {
        path: '*',
        redirect: '/',
    },
];

Vue.use(Router);

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes
})