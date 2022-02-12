export default {
    namespaced: true,
    state: {
        counter: 0,
    },
    getters: {
        getCounter: (state) => {
            return state.counter
        },
    },
    mutations: {
        SET_COUNTER(state) {
            state.counter += 1
        },
    }
}
