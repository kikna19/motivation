import WelcomePage from "@/components/WelcomePage";
import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/components/HomePage";
import LogInPage from "@/components/LogInPage";
import RegisterPage from "@/components/RegisterPage";

const routes = [
    {
        path: '/welcome',
        component: WelcomePage,
        name: 'welcome'
    },
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/login',
        component: LogInPage,
        name: 'login'
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'register'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router