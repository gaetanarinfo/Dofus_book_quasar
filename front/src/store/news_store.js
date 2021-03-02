/**
 * Store News
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    listNews: [],
    listNews2: [],
    listNewsId: [],
    listNewsIdTitle: null
}

const mutations = {
    setListNews(state, value) {
        state.listNews = value
    },
    setListNews2(state, value) {
        state.listNews2 = value
    },
    setListNewsId(state, value) {
        state.listNewsId = value
    },
    setListNewsIdTitle(state, value) {
        state.listNewsIdTitle = value
    }
}

const actions = {
    getNews({ commit }) {
        axios
            .get('/news')
            .then(res => {
                commit('setListNews', res.data.listNews)
            })
    },
    getNews2({ commit }) {
        axios
            .get('/news2')
            .then(res => {
                commit('setListNews2', res.data.listNews2)
            })
    },
    getNewsId({ commit }, payload) {

        axios
            .get('/article/' + payload)
            .then(res => {
                commit('setListNewsId', res.data.articleId)
                commit('setListNewsIdTitle', res.data.articleId.title)
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
        formData.set('content2', payload.content2)

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

        axios
            .post('/news/' + payload.newsId, formData)
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
                        message: "L'article " + payload.title + " À bien été modifié !"
                    })

                }
            })
    },
}

const getters = {
    setListNews: state => {
        return state.listNews
    },
    setListNews2: state => {
        return state.listNews2
    },
    setListNewsId: state => {
        return state.listNewsId
    },
    listNewsIdTitle: state => {
        return state.listNewsIdTitle
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}