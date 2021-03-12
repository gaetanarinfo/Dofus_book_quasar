/**
 * Store Almanax
 *
 *************/

import axios from 'axios'

const state = {
    listEncyclopedie: [],
    listClasses: [],
    classesId: {},
    classesIdRoles: null,
    classesIdRoles2: null,
    classesIdRoles3: null
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
    setListClassesIdRoles(state, value) {
        state.classesIdRoles = value
    },
    setListClassesIdRoles2(state, value) {
        state.classesIdRoles2 = value
    },
    setListClassesIdRoles3(state, value) {
        state.classesIdRoles3 = value
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
                commit('setListClassesIdRoles', res.data.classesId.roles[0])
                commit('setListClassesIdRoles2', res.data.classesId.roles[1])
                commit('setListClassesIdRoles3', res.data.classesId.roles[2])
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
    },
    classesIdRoles: (state) => {
        return state.classesIdRoles
    },
    classesIdRoles2: (state) => {
        return state.classesIdRoles2
    },
    classesIdRoles3: (state) => {
        return state.classesIdRoles3
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}