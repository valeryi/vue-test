import './assets/scss/general.scss'

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import './plugins/bootstrap-vue'
import './plugins/vue-screen'
import store from './plugins/store'

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
