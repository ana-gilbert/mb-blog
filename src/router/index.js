import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from '/src/components/Home.vue'
import Admin from '/src/components/Admin.vue'
import Login from '/src/components/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/admin', name: 'Admin', component: Admin, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const allowedEmails = ['anagilbert915@gmail.com', 'friends@email.com']

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (!requiresAuth) {
    next()
    return
  }

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user && allowedEmails.includes(user.email)) {
      next()
    } else {
      next('/login')
    }
  })
})

export default router
