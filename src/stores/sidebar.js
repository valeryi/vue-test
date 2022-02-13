export default {
    namespaced: true,
    state: {
        mobileActive: false,
    },
    getters: {
        isMobileActive: (state) => {
            return state.mobileActive
        },
    },
    mutations: {
        TOGGLE_SIDEBAR_MOBILE(state) {
            state.mobileActive = !state.mobileActive
        },
    }
}
