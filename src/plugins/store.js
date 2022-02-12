import Vue from "vue"
import Vuex from "vuex"
import camelCase from "lodash/camelCase"

const requireModule = require.context("../stores", false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
	const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""))
	modules[moduleName] = requireModule(fileName).default
})

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	modules
})

if (process.env.NODE_ENV == 'development') {
	window.store = store
}

export default store
