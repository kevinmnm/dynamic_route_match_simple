import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'PageOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page_1" */ '../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'PageTwo',
    component: () => import(/* webpackChunkName: "page_2" */ '../views/Page2.vue')
  },
  {
    path: '/page3',
    name: 'PageThree',
    component: () => import(/* webpackChunkName: "page_3" */ '../views/Page3.vue')
  },
  {
    path: '/page4',
    name: 'PageFour',
    component: () => import(/* webpackChunkName: "page_4" */ '../views/Page4.vue')
  },
  {
    path: '/params/:id',
    name: 'PageParam',
    component: () => import(/* webpackChunkName: "page_2" */ '../views/Page2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
