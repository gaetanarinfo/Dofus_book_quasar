/**
 * Store News
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    listNews: []
}

const mutations = {
    setListNews(state, value) {
        state.listNews = value
    },
}

const actions = { 
    getNews({ commit }) {
        axios
            .get('/news')
            .then(res => {
                commit('setListNews', res.data.listNews)
            })
    },
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}