import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
},
{
    name: 'ArticlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
},
{
    name: 'ArticleById',
    path: '/articles/:id',
    component: ArticleById
},
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})

