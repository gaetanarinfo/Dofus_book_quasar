/**
 * Store Almanax
 *
 *************/

import axios from 'axios'

const state = {
    listAlmanax: [],
    listAlmanax2: [],
    listAlmanax3: null,
    listAlmanax4: null,
    listAlmanax5: null
}

const mutations = {
    setListAlmanax(state, value) {
        state.listAlmanax = value
    },
    setListAlmanax2(state, value) {
        state.listAlmanax2 = value
    },
    setListAlmanaxDesc(state, value) {
        state.listAlmanax3 = value
    },
    setListAlmanaxBonus(state, value) {
        state.listAlmanax4 = value
    },
    setListAlmanaxImg(state, value) {
        state.listAlmanax5 = value
    },
}

const actions = {
    getAlmanax({ commit }) {
        axios
            .get('/almanax')
            .then(res => {
                commit('setListAlmanax', res.data.almanax, res.data.almanaxDesc)
                commit('setListAlmanaxDesc', res.data.almanaxDesc)
                commit('setListAlmanaxBonus', res.data.almanaxBonus)
                commit('setListAlmanaxImg', res.data.almanaxImg)
            })
    },
    getAlmanax2({ commit }) {
        axios
            .get('/almanax2')
            .then(res => {
                commit('setListAlmanax2', res.data.almanax2)
            })
    }

}

const getters = {
    setListAlmanax(state, value) {
        state.listAlmanax
    },
    setListAlmanax2(state, value) {
        state.listAlmanax2
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}