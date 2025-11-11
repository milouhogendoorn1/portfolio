import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {title: 'Home'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {title: 'About'}
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('../views/PortfolioView.vue'),
        meta: {title: 'Portfolio'}
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue'),
        meta: {title: 'Blog'}
    },
    {
        path: '/read/:slug/:id',
        name: 'articleDetail',
        component: () => import('../views/ArticleView.vue'),
        meta: {title: 'Blog'}
    },
    // {
    //     path: '/project/:id',
    //     name: 'ProjectDetail',
    //     component: () => import('@/pages/ProjectDetail.vue')
    // },
    {
        path: '/project/recipe',
        name: 'RecipeProject',
        component: () => import('@/pages/projects/RecipeProject.vue')
    },
    {
        path: '/project/promo',
        name: 'PromoProject',
        component: () => import('@/pages/projects/PromoProject.vue')
    },
    {
        path: '/project/beeldtaal',
        name: 'BeeldtaalProject',
        component: () => import('@/pages/projects/BeeldtaalProject.vue')
    },
    {
        path: '/project/interface-beweging',
        name: 'InterfaceBewegingProject',
        component: () => import('@/pages/projects/InterfaceBewegingProject.vue')
    },
    {
        path: '/project/meesterproef',
        name: 'MeesterproefProject',
        component: () => import('@/pages/projects/MeesterproefProject.vue')
    },
    {
        path: '/project/zelfportret',
        name: 'ZelfportretProject',
        component: () => import('@/pages/projects/ZelfportretProject.vue')
    }
]

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// })


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Als er een opgeslagen positie is (back/forward), gebruik die
        if (savedPosition) {
            return savedPosition;
        } else {
            // Anders scroll naar boven
            return { top: 0 };
        }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' - Milou Hogendoorn';
    next();
});

export default router
