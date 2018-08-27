import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7b7be640 = () => import('../pages/users.vue' /* webpackChunkName: "pages/users" */).then(m => m.default || m)
const _1970ea8b = () => import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */).then(m => m.default || m)
const _7cd832aa = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _b1cadca6 = () => import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */).then(m => m.default || m)
const _bd6a91e6 = () => import('../pages/index/review.vue' /* webpackChunkName: "pages/index/review" */).then(m => m.default || m)
const _26a82521 = () => import('../pages/index/rank.vue' /* webpackChunkName: "pages/index/rank" */).then(m => m.default || m)
const _70c234c4 = () => import('../pages/index/login.vue' /* webpackChunkName: "pages/index/login" */).then(m => m.default || m)
const _d36904d0 = () => import('../pages/index/register.vue' /* webpackChunkName: "pages/index/register" */).then(m => m.default || m)
const _0cb325d1 = () => import('../pages/index/topic/create.vue' /* webpackChunkName: "pages/index/topic/create" */).then(m => m.default || m)
const _0b443835 = () => import('../pages/index/topic/_id.vue' /* webpackChunkName: "pages/index/topic/_id" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/users",
			component: _7b7be640,
			name: "users",
			children: [
				{
					path: ":id?",
					component: _1970ea8b,
					name: "users-id"
				}
			]
		},
		{
			path: "/",
			component: _7cd832aa,
			children: [
				{
					path: "",
					component: _b1cadca6,
					name: "index"
				},
				{
					path: "review",
					component: _bd6a91e6,
					name: "index-review"
				},
				{
					path: "rank",
					component: _26a82521,
					name: "index-rank"
				},
				{
					path: "login",
					component: _70c234c4,
					name: "index-login"
				},
				{
					path: "register",
					component: _d36904d0,
					name: "index-register"
				},
				{
					path: "topic/create",
					component: _0cb325d1,
					name: "index-topic-create"
				},
				{
					path: "topic/:id?",
					component: _0b443835,
					name: "index-topic-id"
				}
			]
		}
    ],
    
    
    fallback: false
  })
}
