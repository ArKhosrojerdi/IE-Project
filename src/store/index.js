import Vuex from "vuex";

export const store = Vuex.createStore({
    state() {
        return {
            url: "http://localhost/api/",
            uid: 0
        }
    },
    getters: {
        getUrl(state) {
            return state.url;
        },
        getUid(state) {
            return state.uid;
        }
    },
    mutations: {
        setU(state, id) {
            state.uid = id;
        }
    },
    actions: {
        setUid({commit}, id) {
            commit("setU", id)
        },
    }
})