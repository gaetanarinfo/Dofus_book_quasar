import axios from 'axios'

const state = {
    listUser: []
}

const mutations = {
    setListUser(state, value) {
        state.listUser = value
    }
}

const actions = {
    getListUser({ commit }) {
        console.log('Get List User')
        axios
            .get('http://127.0.0.1:4000/user')
            .then(res => {
                commit('setListUser', res.data.listUser)
            })
    },
    // eslint-disable-next-line no-empty-pattern
    createUser({ commit }, payload) {
        const p = payload
        axios
            .post('http://127.0.0.1:4000/user', {
                lastname: p.lastname,
                firstname: p.firstname,
                password: p.password,
                email: p.email
            })
            .then(res => {
                commit('setListUser', res.data.listUser)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    // eslint-disable-next-line no-empty-pattern
    editOneUser({ commit }, payload) {
        const p = payload
        axios
            .put('http://127.0.0.1:4000/user/' + p.id, {
                lastname: p.lastname,
                firstname: p.firstname,
                password: p.password,
                email: p.email
            })
            .then(res => {
                commit('setListUser', res.data.listUser)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    // eslint-disable-next-line no-empty-pattern
    deleteOneUser({ commit }, payload) {
        axios
            .delete(`http://127.0.0.1:4000/user/${payload}`)
            .then(res => {
                commit('setListUser', res.data.listUser)
            })
    },
    loginUser({ commit }, payload) {
        const p = payload
        axios
            .post('http://127.0.0.1:4000/userLog', {
                email: p.email,
                password: p.password
            })
            .then(res => {
                console.log(res.data.listUser);
                commit('setListUser', res.data.listUser)
            })
            .catch((err) => {
                console.log(err)
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