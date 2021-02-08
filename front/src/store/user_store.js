import axios from 'axios'

const state = {
  listUser: []
}

const mutations = {
  setListUser (state, value) {
    state.listUser = value
  }
}

const actions = {
  getListUser ({ commit }) {
    console.log('Get List User')
    axios
      .get('/user')
      .then(res => {
        commit('setListUser', res.data.listUser)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  createUser ({ commit }, payload) {
    const p = payload
    console.log(p)
    axios
      .post('/user', {
        name: p.name,
        mobile: p.mobile,
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
  editOneUser ({ commit }, payload) {
    const p = payload
    console.log(p)
    axios
      .put('/user/' + p.id, {
        name: p.name,
        mobile: p.mobile,
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
  deleteOneUser ({ commit }, payload) {
    axios
      .delete(`/user/${payload}`)
      .then(res => {
        commit('setListUser', res.data.listUser)
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
