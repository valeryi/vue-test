import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import bootstrap from './plugins/bootstrap-vue'
import store from './plugins/store'

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
