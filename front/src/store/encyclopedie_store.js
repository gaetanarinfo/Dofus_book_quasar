/**
 * Store Almanax
 *
 *************/

import axios from 'axios'

const state = {
    listEncyclopedie: []
}

const mutations = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie = value
    }
}

const actions = {
    getEncyclopedie({ commit }) {
        axios
            .get('/encyclopedie')
            .then(res => {
                commit('setListEncyclopedie', res.data.data)
            })
    }
}

const getters = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}