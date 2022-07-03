/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/index.vue'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  name: 'user',
  meta: {
    title: 'user',
    icon: 'user',
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/user/list.vue'),
      name: 'ListManagement',
      meta: { title: 'userListManagement', noCache: true },
    },
    {
      path: 'create',
      component: () => import('@/views/user/create.vue'),
      name: 'UserCreate',
      breadcrumb: false,
      meta: { title: 'userCreate', noCache: true },
    },
    {
      path: 'update',
      component: () => import('@/views/user/update.vue'),
      hidden: true,
      name: 'UserUpdate',
      breadcrumb: false,
      meta: { title: 'userUpdate', noCache: true },
    },
    {
      path: 'password',
      component: () => import('@/views/user/password.vue'),
      hidden: true,
      breadcrumb: false,
      name: 'UserPassword',
      meta: { title: 'changePassword', noCache: true },
    },
  ],
}
export default userRouter
