import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
