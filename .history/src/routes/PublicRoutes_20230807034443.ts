import { RouteRecordRaw } from 'vue-router';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: 'users',
        name: 'User',
        component: import('@/modules/User/User.vue') 
    },
    {
        path: 'users/:id',
        name: 'UserDetail',
        component: import('@/modules/User/UserDetail.vue') 
    }
];
