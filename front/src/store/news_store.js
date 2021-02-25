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
        for (const i of Object.keys(payload.files)) {
            formData.append('files', payload.files[i])
        }

        console.log(payload.cat);

        axios
            .post('/news', formData, {
                title: payload.title,
                content: payload.content,
                files: payload.files,
                url: payload.url,
                categorie: payload.cat
            })
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