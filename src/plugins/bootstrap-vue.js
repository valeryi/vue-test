import Vue from "vue"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import CContainer from '../components/CustomContainer.vue'

import 'bootstrap/scss/bootstrap.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// ** Adding custom container for grid ** //
Vue.component(`c-container`, CContainer)
