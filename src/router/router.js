import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
