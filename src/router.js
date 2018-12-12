import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/layout/Main'
import Home from '@/views/index/Home'
import Cliente from '@/views/cliente/Cliente'
import ClienteCreate from '@/views/cliente/ClienteCreate'
import Treinamento from '@/views/treinamento/Treinamento'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/cliente',
          name: 'Cliente',
          component: Cliente
        },
        {
          path: '/cliente/create',
          name: 'ClienteCreate',
          component: ClienteCreate
        },
        {
          path: '/treinamento',
          name: 'Treinamento',
          component: Treinamento
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
