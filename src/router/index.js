import Vue from "vue"
import VueRouter from "vue-router"
import LensReplacement from "../views/LensReplacement.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LensReplacement",
    component: LensReplacement,
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
