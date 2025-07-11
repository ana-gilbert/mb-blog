import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from '/src/components/Home.vue'
import Admin from '/src/components/Admin.vue'
import Admin2 from '/src/components/Admin2.vue'
import Login from '/src/components/Login.vue'
import Archive from '/src/components/Archive.vue'
import PostDetail from '/src/components/PostDetail.vue'
import ContactMe from '/src/components/ContactMe.vue'
import AboutMe from '/src/components/AboutMe.vue'
import Secrets from '/src/components/Secrets.vue'
import Recs from '/src/components/Recs.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/admin', name: 'Admin', component: Admin, meta: { requiresAuth: true } },
  { path: '/admin2', name: 'Admin2', component: Admin2, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login },
  { path: '/archive', name: 'Archive', component: Archive },
  { path: '/post/:id', name: 'PostDetail', component: PostDetail},
  { path: '/contact-me', name: 'ContactMe', component: ContactMe }, 
  { path: '/about-me', name: 'AboutMe', component: AboutMe },
  { path : '/shhh', name: 'Secrets', component: Secrets },
  { path: '/recs', name: 'Recs', component: Recs },
  { path: '/:pathMatch(.*)*', redirect: '/' } // Catch-all route to redirect to Home
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
