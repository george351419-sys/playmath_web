import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: () => import('../views/Exhibition.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router