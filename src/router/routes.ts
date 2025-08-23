import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/dashboard' },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/layout/DashboardView.vue'),
        children: [],
    },
    { path: '/login', name: 'login', component: () => import('@/views/login/LoginView.vue') },
    { path: '/:patchMatch(.*)*', name: 'not-found', component: () => import('@/views/not-found/NotFoundView.vue') }
]
