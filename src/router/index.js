import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import register from '@/page/register'
import index from '@/page/index'
import home from '@/page/home'
import userList from '@/page/userList'
import shopList from '@/page/shopList'
import city from '@/page/city'
import area from '@/page/area'

Vue.use(Router)
const routes = [
    {
        path: '/',
        redirect: '/index'
    },{
      path: '/login',
      name: '',
      component: login
    },{
      path: '/register',
      name: '',
      component: register
    },{
    path: '/index',
    name: '',
    component: index,
    children:[{
      path:'',
      component:home,
      meta:[],
    },{
      path:'/userList',
      component:userList,
      meta:['数据管理','用户列表']
    },{
      path:'/shopList',
      component:shopList,
      meta:['数据管理','商家列表']
    },{
      path:'/city',
      component:city,
      meta:['投资管理','省份投资']
    },{
      path:'/area',
      component:area,
      meta:['投资管理','区域投资']
    }]
 }
]

export default new Router({
    routes
})