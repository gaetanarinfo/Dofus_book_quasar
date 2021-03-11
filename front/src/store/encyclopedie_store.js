/**
 * Store Almanax
 *
 *************/

import axios from 'axios'

const state = {
    listEncyclopedie: [],
    listClasses: [],
    classesId: {}
}

const mutations = {
    setListEncyclopedie(state, value) {
        state.listEncyclopedie = value
    },
    setListClasses(state, value) {
        state.listClasses = value
    },
    setListClassesId(state, value) {
        state.classesId = value
    },
    ClassesId(state, value) {
        state.classesIdImg = value
    }
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
        return state.listEncyclopedie
    },
    setListClasses(state, value) {
        return state.listClasses
    },
    classesId: (state) => {
        return state.classesId
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}