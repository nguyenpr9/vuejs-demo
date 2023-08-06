import { RouteRecordRaw } from 'vue-router';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: '/users'
    },
    {
        path: 'users',
        name: 'User',
        component: () => import('@/modules/User/User.vue') 
    },
    {
        path: 'users/:id',
        name: 'UserDetail',
        component: () =>import('@/modules/User/UserDetail.vue') 
    }
];
