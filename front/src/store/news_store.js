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
    postNews({}, payload) {

        const formData = new FormData();

        formData.append('files', payload.files[0])
        formData.set('title', payload.title)
        formData.set('content', payload.content)
        formData.set('url', payload.url)
        formData.set('cat', payload.cat)

        axios
            .post('/news', formData)
            .then((res) => {

                // const succ = res.data.success,
                //     err = res.data.error

                // if (err === true) {

                //     Notify.create({
                //         color: 'red-5',
                //         textColor: 'white',
                //         icon: 'warning',
                //         message: "Une erreur est survenue !"
                //     })
                // }

                // if (succ === true) {

                //     Notify.create({
                //         color: 'green-5',
                //         textColor: 'white',
                //         icon: 'check',
                //         message: "L'article à bien été ajouter !"
                //     })

                // }
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