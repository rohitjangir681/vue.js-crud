import { createRouter, createWebHistory } from "vue-router";
import UserList from "./views/UserList.vue";
import Dashboard from "./views/Dashboard.vue";
import UserCreate from "./views/UserCreate.vue";
import EditUser from "./views/EditUser.vue";
import Login from "./components/Login.vue";

const routes = [
    {
        path:'/',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/users',
        name: 'Users',
        component: UserList
    },
    {
        path: '/users/create',
        name: 'UserCreate',
        component: UserCreate
    },
    {
        path: '/users/edit/:id',
        name: 'EditUser',
        component: EditUser
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

