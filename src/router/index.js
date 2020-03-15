import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    name: 'film',
    component: () => import('@/views/File'),
    children: [
      {
        path: 'nowPlaying',
        name: 'nowPlaying',
        component: () => import('@/views/File/nowPlaying')
      },
      {
        path: 'commingSoon',
        name: 'commingSoon',
        component: () => import('@/views/File/commingSoon')
      },
      {
        path: '',
        redirect: '/film/nowPlaying'
      }
    ]
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/Info')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/views/Center')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail')
  },
  {
    path: '*',
    redirect: 'film'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
// 全局守卫 默认情况下拦截所有路由
// router.beforeEach((to, from, next) => {
//   if(to.path== '/center'){
//     console.log('盘查')
//   }else{
//     next()
//   }
// })

export default router
