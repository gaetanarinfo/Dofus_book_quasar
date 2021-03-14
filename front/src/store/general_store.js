/**
 * Store Général
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    listRatings: []
}

const mutations = {
    setRatings(state, value) {
        state.listRatings = value
    }
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
    }
}

const getters = {
    setRatings(state) {
        return state.listRatings
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}