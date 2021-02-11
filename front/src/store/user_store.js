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
        console.log('Auth Register')
        console.log(this.formRegister)
        axios
            .post('http://127.0.0.1:8000/register', {
                lastname: payload.lastname,
                firstname: payload.firstname,
                email: payload.email,
                password: payload.password
            })
            .then((res) => {
                console.log(res.payload)
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

                console.log(res);
                axios
                    .get('http://127.0.0.1:8000/login')
                    .then((ress) => {
                        const sess = ress.data.sess
                        console.log(sess.status)

                        if (sess.status === 'user') {
                            console.log('sess user')
                            commit('setLoggedIn', true)
                        }
                    })

            })
            .catch((err) => {
                console.log(err)
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