/**
 * Store Auth
 *
 *************/

import axios from 'axios'

const state = {
    loggedIn: false,
    adminIn: false,
    verifiedIn: false,
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
            .post('http://127.0.0.1:4000/register', {
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
    loginUser({}, payload) {
        console.log('Auth Login')
        axios
            .post('http://127.0.0.1:4000/userLog', {
                email: payload.email,
                password: payload.password
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    logoutUser({ commit }) {
        console.log('Auth Logout')
        axios
            .get('http://127.0.0.1:4000/logout')
            .then((res) => {
                localStorage.removeItem('sess', null)
                commit('setLoggedIn', false)
                console.log('session User')
                this.$router.replace('/')
            })
    },
    handleAuthStateChange({ commit }) {
        axios
            .get('http://127.0.0.1:4000/session')
            .then((res) => {
                const sess = res.data.sess
                console.log(sess)

                if (sess.status == 'user') {
                    console.log('sess user')
                    commit('setLoggedIn', true)
                }
            })
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}