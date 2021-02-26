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
        formData.set('cat', payload.cat.value)
        formData.set('category', payload.category.value)

        axios
            .post('/news', formData)
            .then((res) => {

                const succ = res.data.success,
                    err = res.data.error

                if (err === true) {

                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Une erreur est survenue !"
                    })
                }

                if (succ === true) {

                    Notify.create({
                        color: 'green-5',
                        textColor: 'white',
                        icon: 'check',
                        message: "L'article à bien été ajouter !"
                    })

                }
            })
    },
    editNews({}, payload) {

        const formData = new FormData();

        if (payload.files != null) {
            formData.append('files', payload.files[0])
        }

        formData.set('title', payload.title)
        formData.set('content', payload.content)
        formData.set('url', payload.url)

        if (payload.cat.value != undefined) {
            formData.set('cat', payload.cat.value)
        } else {
            formData.set('cat', payload.cat)
        }

        if (payload.category.value != undefined) {
            formData.set('category', payload.category.value)
        } else {
            formData.set('category', payload.category)
        }

        console.log(payload.category);
        console.log(payload.cat);

        // axios
        //     .post('/news/' + payload.newsId, formData)
        //     .then((res) => {

        //         const succ = res.data.success,
        //             err = res.data.error

        //         if (err === true) {

        //             Notify.create({
        //                 color: 'red-5',
        //                 textColor: 'white',
        //                 icon: 'warning',
        //                 message: "Une erreur est survenue !"
        //             })
        //         }

        //         if (succ === true) {

        //             Notify.create({
        //                 color: 'green-5',
        //                 textColor: 'white',
        //                 icon: 'check',
        //                 message: "L'article à bien été modifier !"
        //             })

        //         }
        //     })
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