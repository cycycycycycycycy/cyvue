import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../pages/Main'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        lable: '主页',
        component: () => import('../pages/home'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login')
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// src/router/index.js
//重复点击菜单路由报错问题修复
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
