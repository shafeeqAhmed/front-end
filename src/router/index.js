import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, isUserEmailVerified, isTwoFaChecked, getUserData, getHomeRouteForLoggedInUser, get } from '@/auth/utils'
import common from './routes/common'
import admin from './routes/admin'
import agent from './routes/agent'
import client from './routes/client'
import publisher from './routes/publisher'
import other from './routes/other'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    ...common,
    ...admin,
    ...agent,
    ...client,
    ...publisher,
    ...other,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})
router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  const userData = getUserData()
  const twofa = isTwoFaChecked()
  console.log(to)

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    return next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  //if user is not loging redirect him on login page
  if (
    !isLoggedIn
    && to.name != 'auth-login'
    && to.name != 'auth-register'
    && to.name != 'auth-forgot-password'
    && to.name != 'auth-reset'
    && to.name != 'email-not-verified'
    && to.name != 'registration-completed'
  ) {
    return next({ name: 'auth-login' })
  }

  if (
    isLoggedIn
    && !isUserEmailVerified()
    && to.name != 'auth-login'
    && to.name != 'email-not-verified'
    && to.name != 'verify-email'
  ) {
    next({ name: 'email-not-verified' })
  }


  if (
    isLoggedIn
    && isUserEmailVerified()
    && !twofa
    && to.name != 'verify-otp'
    && to.name != 'auth-login'
    && to.name != 'email-not-verified'
    && to.name != 'verify-email'
  ) {
    return next({ name: 'verify-otp' })
  }




  return next()
})
// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
