import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import SettingsView from './components/SettingsView.vue';
import SettingsProfileView from './components/SettingsProfileView.vue';
import UserView from './components/UserView.vue';
import NotFoundView from './components/NotFoundView.vue';
import PublicView from './components/PublicView.vue';
import LoginedView from './components/LoginedView.vue';
import AdminView from './components/AdminView.vue';

const router = createRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            role: ''
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
        children: [{
            path: 'profile',
            name: 'settings-profile',
            component: SettingsProfileView,
            meta: {
                requiresAuth: true,
                isAuthenticated: false
            },
        }]
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserView,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFoundView
    },
    {
        path: '/public',
        name: 'public',
        component: PublicView
    },
    {
        path: '/logined',
        name: 'logined',
        component: LoginedView,
        meta: { requiresRole: 'user' }
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        meta: { requiresRole: 'admin' }
    }
    ],
    history: createWebHistory()
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !from.meta.isAuthenticated) {
        next({
            name: 'home'
        });
    } else {
        next();
    }
});
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresRole)) {
        const requiredRole = to.meta.requiresRole;
        const userRole = from.meta.role
        if (userRole !== requiredRole) {
            next('/404');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
