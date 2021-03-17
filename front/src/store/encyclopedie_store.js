/**
 * Store Almanax
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    listEncyclopedie: [],
    listClasses: [],
    classesId: {},
    classesIdRoles: null,
    classesIdRoles2: null,
    classesIdRoles3: null,
    listClassesRoles: [],
    listMetiers: [],
    metiersId: [],
    listMonstres: [],
    monstresId: [],
    listArmes: []
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
    },
    setlistClassesRoles(state, value) {
        state.listClassesRoles = value
    },
    setListMetiers(state, value) {
        state.listMetiers = value
    },
    setListMetiersId(state, value) {
        state.metiersId = value
    },
    setListMonstres(state, value) {
        state.listMonstres = value
    },
    setListMonstresId(state, value) {
        state.monstresId = value
    },
    setListArmes(state, value) {
        state.listArmes = value
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
                commit('setListClassesIdRoles', res.data.classesId.roles[0])
                commit('setListClassesIdRoles2', res.data.classesId.roles[1])
                commit('setListClassesIdRoles3', res.data.classesId.roles[2])
            })
    },
    getClassesRoles({ commit }, payload) {
        axios
            .get('/encyclopedie/classesRoles/' + payload)
            .then(res => {
                commit('setlistClassesRoles', res.data.classesRoles)
            })
    },
    getMetiers({ commit }) {
        axios
            .get('/encyclopedie/metiers')
            .then(res => {
                commit('setListMetiers', res.data.metiers)
            })
    },
    getMetiersId({ commit }, payload) {
        axios
            .get('/encyclopedie/metiers/' + payload)
            .then(res => {
                commit('setListMetiersId', res.data.metiersId)
            })
    },
    getMonstres({ commit }) {
        axios
            .get('/encyclopedie/monstres')
            .then(res => {
                commit('setListMonstres', res.data.monstres)
            })
    },
    getMonstresId({ commit }, payload) {
        axios
            .get('/encyclopedie/monstres/' + payload)
            .then(res => {
                console.log(res.data.monstresId);
                commit('setListMonstresId', res.data.monstresId)
            })
    },
    getArmes({ commit }) {
        axios
            .get('/encyclopedie/armes')
            .then(res => {
                commit('setListArmes', res.data.armes)
            })
    },
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
    setListClassesRoles(state) {
        return state.listClassesRoles
    },
    setListMetiers(state) {
        return state.listMetiers
    },
    metiersId: (state) => {
        return state.metiersId
    },
    setListMonstres: (state) => {
        return state.listMonstres
    },
    monstresId: (state) => {
        return state.monstresId
    },
    setListArmes: (state) => {
        return state.listArmes
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}