/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/index.vue'

const homeRouter = {
  path: '/home',
  component: Layout,
  redirect: '/user/list',
  name: 'Home',
  meta: {
    title: 'home',
    icon: 'component',
  },
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      name: 'Dashboard',
      meta: { title: 'dashboard', affix: true },
    },
    {
      path: 'banner/list',
      component: () => import('@/views/home/banner/list.vue'),
      name: 'BannerManagement',
      meta: { title: 'bannerManagement', noCache: true },
    },
    {
      path: 'banner/create',
      hidden: true,
      component: () => import('@/views/home/banner/create.vue'),
      name: 'BannerCreate',
      breadcrumb: false,
      meta: { title: 'bannerCreate', noCache: true },
    },
    {
      path: 'banner/update',
      component: () => import('@/views/home/banner/update.vue'),
      hidden: true,
      name: 'BannerUpdate',
      breadcrumb: false,
      meta: { title: 'bannerUpdate', noCache: true },
    },

    {
      path: 'about/list',
      component: () => import('@/views/home/about/list.vue'),
      name: 'AboutManagement',
      meta: { title: 'aboutManagement', noCache: true },
    },
    {
      path: 'about/create',
      hidden: true,
      component: () => import('@/views/home/about/create.vue'),
      name: 'HomeAboutCreate',
      breadcrumb: false,
      meta: { title: 'homeAboutCreate', noCache: true },
    },
    {
      path: 'about/update',
      component: () => import('@/views/home/about/update.vue'),
      hidden: true,
      name: 'HomeAboutUpdate',
      breadcrumb: false,
      meta: { title: 'homeAboutUpdate', noCache: true },
    },
  ],
}
export default homeRouter
