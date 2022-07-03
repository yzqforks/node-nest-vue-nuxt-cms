/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/index.vue'

const aboutRouter = {
  path: '/about',
  component: Layout,
  redirect: '/about/list',
  name: 'About',
  meta: {
    title: 'about',
    icon: 'tab',
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/about/list.vue'),
      name: 'AboutListManagement',
      meta: { title: 'about', noCache: true },
    },
    {
      path: 'create',
      component: () => import('@/views/about/create.vue'),
      hidden: true,
      name: 'AboutCreate',
      breadcrumb: false,
      meta: { title: 'aboutCreate', noCache: true },
    },
    {
      path: 'update',
      component: () => import('@/views/about/update.vue'),
      hidden: true,
      name: 'AboutUpdate',
      breadcrumb: false,
      meta: { title: 'aboutUpdate', noCache: true },
    },
  ],
}
export default aboutRouter
