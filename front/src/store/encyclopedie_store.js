/**
 * Store Almanax
 *
 *************/

import axios from 'axios'

const state = {
    listEncyclopedie: [],
    listClasses: []
}

const mutations = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie = value
    },
    setListClasses(state, value) {
        state.listClasses = value
    },
}

const actions = {
    getEncyclopedie({ commit }) {
        axios
            .get('/encyclopedie')
            .then(res => {
                commit('setListEncyclopedie', res.data.data)
            })
    },
    getClasses({ commit }) {
        axios
            .get('/encyclopedie/classes')
            .then(res => {
                console.log(res.data.classes);
                commit('setListClasses', res.data.classes)
            })
    }
}

const getters = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie
    },
    setListClasses(state, value) {
        state.listClasses
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}