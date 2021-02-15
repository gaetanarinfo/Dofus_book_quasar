/**
 * Store Auth
 *
 *************/

import axios from 'axios'

const state = {
    loggedIn: false,
    token: null
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    }
}

const actions = {
    // eslint-disable-next-line no-empty-pattern
    registerUser({}, payload) {
        axios
            .post('http://127.0.0.1:8000/register', {
                lastname: payload.lastname,
                firstname: payload.firstname,
                email: payload.email,
                pseudo: payload.pseudo,
                password: payload.password
            })
            .then((res) => {
                // console.log(res.payload)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    // eslint-disable-next-line no-empty-pattern
    loginUser({ commit }, payload) {
        console.log('Auth Login')
        axios
            .post('http://127.0.0.1:8000/login', {
                email: payload.email,
                password: payload.password
            })
            .then((res) => {

                // Modif --> 15/02/2021
                localStorage.setItem('token', res.data.sess.token)
                localStorage.setItem('status', res.data.sess.status)
                localStorage.setItem('email', res.data.sess.email)
                localStorage.setItem('pseudo', res.data.sess.pseudo)

                axios
                    .get('http://127.0.0.1:8000/login')
                    .then((ress) => {
                        const sess = localStorage.getItem('status')

                        if (sess === 'user') {
                            commit('setLoggedIn', true)
                        }
                    })

            })
            .catch((err) => {
                console.log(err)
            })
    },
    handleAuthStateChange({ commit }) {

        const token = localStorage.getItem('token')

        console.log('token : ' + token);

        axios
            .get('http://127.0.0.1:8000/session/', { token })
            .then((res) => {

                console.log(res.data.email);

                const sess = localStorage.getItem('status')

                if (sess === 'user') {
                    commit('setLoggedIn', true)
                }
            })
    },
    logoutUser({ commit }) {
        console.log('Auth Logout')
        axios
            .get('/logout')
            .then((res) => {
                localStorage.removeItem('sess', null)
                commit('setLoggedIn', false)
                console.log('session User')
                this.$router.replace('/')
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