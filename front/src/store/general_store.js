/**
 * Store Général
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    listRatings: [],
    listImage: [],
    imagesId: []
}

const mutations = {
    setRatings(state, value) {
        state.listRatings = value
    },
    setListImage(state, value) {
        state.listImage = value
    },
    imagesId(state, value) {
        state.imagesId = value
    },
}

const actions = {
    postRating({ commit }, payload) {
        axios
            .post('/ratings/', {
                ip: payload[0].ip,
                rating: payload[0].ratingNumber
            })
            .then((res) => {

                const err = res.data.error,
                    success = res.data.success
                if (err === true) {

                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Tu as déjà voté !"
                    })

                }

                if (success === true) {

                    Notify.create({
                        color: 'green-5',
                        textColor: 'white',
                        icon: 'check',
                        message: 'Ton vote à été pris en compte ! Merci.'
                    })

                }

            })
    },
    getRating({ commit }) {
        axios
            .get('/ratings')
            .then((res) => {
                commit('setRatings', res.data.dataRating)
            })
    },
    getImage({ commit }) {
        axios
            .get('/galerie')
            .then((res) => {
                commit('setListImage', res.data.galerie)
            })
    },
    getImageId({ commit }, payload) {
        axios
            .get('/galerie/' + payload)
            .then((res) => {
                commit('imagesId', res.data.imagesId)
            })
    },
    postImage({}, payload) {

        const formData = new FormData();

        formData.append('files', payload.files[0])
        formData.set('title', payload.title)

        axios
            .post('/galerie', formData)
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
                        message: "L'image à bien été ajouter !"
                    })

                }
            })
    },
}

const getters = {
    setRatings: state => {
        return state.listRatings
    },
    setListImage: state => {
        return state.listImage
    },
    imagesId: state => {
        return state.imagesId
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}