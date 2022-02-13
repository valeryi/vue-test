import Vue from 'vue'
import VueScreen from 'vue-screen'

Vue.use(VueScreen, {
    extend: 'bootstrap',
    mobile: screen => (screen.xs || screen.sm) && !screen.md,
})
