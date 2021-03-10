/**
 * Store Almanax
 *
 *************/

import axios from 'axios'

const state = {
    listEncyclopedie: [],
    listClasses: [],
    listClassesId: []
}

const mutations = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie = value
    },
    setListClasses(state, value) {
        state.listClasses = value
    },
    setListClassesId(state, value) {
        state.listClassesId = value
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
                commit('setListClasses', res.data.classes)
            })
    },
    getClassesId({ commit }, payload) {

        axios
            .get('/encyclopedie/classesId/' + payload)
            .then(res => {
                commit('setListClassesId', res.data.classesId)
            })
    }
}

const getters = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie
    },
    setListClasses(state, value) {
        state.listClasses
    },
    setListClassesId(state, value) {
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