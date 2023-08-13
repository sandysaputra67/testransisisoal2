import Vue from 'vue'
import VueRouter from 'vue-router'

import Create from '../views/Create.vue'
import Detail from '../views/Detail.vue'
import Update from '../views/Update.vue'
import Users from '../views/Users.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/update',
    name: 'perbarui',
    component: Update
  },
  {
    path: '/',
    name: 'list data',
    component: Users
  },
]

const router = new VueRouter({
  routes
})

export default router
