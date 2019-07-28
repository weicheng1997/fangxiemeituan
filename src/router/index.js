import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage/HomePage';
import Order from '../pages/Order/Order'
import PersonalCenter from '../pages/PersonalCenter/PersonalCenter'
import Member from '../pages/Member/Member'
// import Search from '../pages/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/personalcenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
})
