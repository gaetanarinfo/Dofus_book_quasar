/**
 * Store Auth
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    listMail: [],
    listUser: {},
    listRecipient: [],
    loggedIn: false,
    logged: false,
    token: null,
    listNotif: null
}

const mutations = {
    setListMail(state, value) {
        state.listMail = value
    },
    setListUser(state, value) {
        state.listUser = value
    },
    setLoggedIn(state, value) {
        state.loggedIn = value
    },
    setListRecipient(state, value) {
        state.listRecipient = value
    },
    setMailNotif(state, value) {
        state.listNotif = value
    }
}

const actions = {
    // eslint-disable-next-line no-empty-pattern
    registerUser({}, payload) {
        axios
            .post('/register', {
                lastname: payload.lastname,
                firstname: payload.firstname,
                email: payload.email,
                pseudo: payload.pseudo,
                password: payload.password
            })
            .then((res) => {

                const err = res.data.error,
                    err2 = res.data.error2

                // User email exist
                if (err === true) {

                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "L'adresse email éxiste déjà !"
                    })

                } else {

                    if (err2 === true) {

                        Notify.create({
                            color: 'red-5',
                            textColor: 'white',
                            icon: 'warning',
                            message: "Le pseudo éxiste déjà !"
                        })

                    } else {

                        Notify.create({
                            color: 'green-5',
                            textColor: 'white',
                            icon: 'check',
                            message: 'Ton inscription est pris en compte !'
                        })

                        setTimeout(function() {
                            document.location.href = "/#/login";
                        }, 2000);

                    }

                }

            })
            .catch((err) => {
                //console.log(err)
            })
    },
    // eslint-disable-next-line no-empty-pattern
    loginUser({ commit }, payload) {
        axios
            .post('/login', {
                email: payload.email,
                password: payload.password
            })
            .then((res) => {

                const err = res.data.error,
                    err2 = res.data.error2,
                    err3 = res.data.error3

                // User empty
                if (err === true) {
                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Ton compte n'éxiste pas !"
                    })
                }

                // User banni
                if (err2 === true) {
                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Ton compte à été banni !"
                    })
                }

                // User banni
                if (err3 === true) {
                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Le mot de passe ne correspond pas !"
                    })
                }

                // Modif --> 15/02/2021
                localStorage.setItem('status', res.data.sess.status)
                localStorage.setItem('email', res.data.sess.email)
                localStorage.setItem('userId', res.data.sess._id)
                localStorage.setItem('pseudo', res.data.sess.pseudo)
                localStorage.setItem('lastname', res.data.sess.lastname)
                localStorage.setItem('firstname', res.data.sess.firstname)
                localStorage.setItem('avatar', res.data.sess.avatar)
                localStorage.setItem('token', res.data.token)

                const sess = localStorage.getItem('status')

                if (sess === 'user') {

                    Notify.create({
                        color: 'green-5',
                        textColor: 'white',
                        icon: 'check',
                        message: `Bienvenue ${res.data.sess.pseudo}`
                    })

                    setTimeout(function() {
                        commit('setLoggedIn', true)
                        document.location.href = "/";
                    }, 2000);

                }

            })
            .catch((err) => {


            })
    },
    handleAuthStateChange({ commit }) {

        const token = localStorage.getItem('token')

        axios
            .get('/session/', { token })
            .then((res) => {

                const sess = localStorage.getItem('status')

                if (sess === 'user') {

                    commit('setLoggedIn', true)
                }
            })
    },
    logged({ commit }) {

        const token = localStorage.getItem('token')

        axios
            .get('/session/', { token })
            .then((res) => {

                const sess = localStorage.getItem('status')

                if (sess === 'user') {

                    commit('setLoggedIn', true)

                }
            })
    },
    logoutUser({ commit }) {
        axios
            .get('/logout')
            .then((res) => {

                Notify.create({
                    color: 'green-5',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: `Merci de ta visite ${localStorage.getItem('pseudo')} à bientôt !`
                })

                setTimeout(function() {
                    localStorage.removeItem('sess', null)
                    localStorage.removeItem('token', null)
                    localStorage.removeItem('status', null)
                    localStorage.removeItem('userId', null)
                    localStorage.removeItem('email', null)
                    localStorage.removeItem('pseudo', null)
                    localStorage.removeItem('lastname', null)
                    localStorage.removeItem('firstname', null)
                    localStorage.removeItem('avatar', null)

                    commit('setLoggedIn', false)
                    document.location.href = "/";
                }, 2000);
            })
    },
    resetPasswordUser({ commit }, payload) {
        axios
            .post('/password_reset', {
                email: payload.email
            })
            .then((res) => {

                const err = res.data.error,
                    succ = res.data.success,
                    email = res.data.emailPWD,
                    token = res.data.tokenPWD

                localStorage.setItem('tokenPWD', token)
                localStorage.setItem('email', email)

                // User empty
                if (err === true) {
                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Le compte n'éxiste pas !"
                    })
                }

                if (succ === true) {
                    Notify.create({
                        color: 'green-5',
                        textColor: 'white',
                        icon: 'check',
                        message: "Un e-mail a été envoyé pour réinitialiser ton mot de passe !"
                    })
                }



            })
            .catch((err) => {


            })
    },
    recoverPasswordUser({ commit }) {

        const token = localStorage.getItem('tokenPWD')

        axios
            .get('/reset_password/', { token })
            .then((res) => {

                if (token) {
                    //console.log('Le token est bon');
                } else {
                    document.location.href = "/";
                }

            })
    },
    recoverPasswordUserConfirm({ commit }, payload) {

        const token = localStorage.getItem('tokenPWD')

        axios
            .post('/reset_password/', {
                tokenPWD: token,
                email: localStorage.getItem('email'),
                password: payload.password,
                password_confirm: payload.password_confirm
            })
            .then((res) => {

                const err = res.data.error,
                    err2 = res.data.error2,
                    succ = res.data.success

                // User email exist
                if (err === true) {

                    Notify.create({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Les mots de passe ne correspondent pas !"
                    })

                } else {

                    if (err2 === true) {

                        Notify.create({
                            color: 'red-5',
                            textColor: 'white',
                            icon: 'warning',
                            message: "Le mot de passe doit faire plus de 8 caractères !"
                        })

                    } else {

                        if (succ === true) {
                            Notify.create({
                                color: 'green-5',
                                textColor: 'white',
                                icon: 'check',
                                message: 'Le mot de passe est désormais changé !'
                            })

                            localStorage.removeItem('tokenPWD')
                            localStorage.removeItem('email')

                            setTimeout(function() {
                                document.location.href = "/#/login";
                            }, 2000);

                        }

                    }

                }

            }).catch((err) => {
                //console.log(err)
            })
    },
    loggedDataUser({ commit }) {

        const userToken = localStorage.getItem('token')

        axios
            .get('/profil/' + userToken)
            .then((res) => {

                const email = localStorage.getItem('email'),
                    pseudo = localStorage.getItem('pseudo'),
                    id = localStorage.getItem('userId'),
                    avatar = localStorage.getItem('avatar'),
                    lastname = localStorage.getItem('lastname'),
                    firstname = localStorage.getItem('firstname')

                // Comparaison si l'user vient à modifier le localstorage
                if (email != res.data.userData.email) {
                    localStorage.setItem('email', res.data.userData.userEmail)
                } else if (pseudo != res.data.userData.pseudo) {
                    localStorage.setItem('pseudo', res.data.userData.userPseudo)
                } else if (id != res.data.userData._id) {
                    localStorage.setItem('userId', res.data.userData._id)
                } else if (avatar != res.data.userData.avatar) {
                    localStorage.setItem('avatar', res.data.userData.avatar)
                } else if (lastname != res.data.userData.lastname) {
                    localStorage.setItem('lastname', res.data.userData.lastname)
                } else if (firstname != res.data.userData.firstname) {
                    localStorage.setItem('firstname', res.data.userData.firstname)
                }

                commit('setListUser', res.data.userData)

            })
    },
    editUser({}, payload) {

        const userId = localStorage.getItem('userId')

        axios
            .post('/profil_edit/' + userId, {
                lastname: payload.lastname,
                firstname: payload.firstname,
                email: payload.email,
                pseudo: payload.pseudo
            })
            .then((res) => {

                const succ = res.data.success,
                    err = res.data.error,
                    userEmail = res.data.userEmail,
                    userPseudo = res.data.userPseudo,
                    userLastName = res.data.userLastName,
                    userFirstName = res.data.userFirstName

                // User email exist
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
                        message: 'Ton profil à été modifier !'
                    })

                    localStorage.setItem('email', userEmail)
                    localStorage.setItem('lastname', userLastName)
                    localStorage.setItem('firstname', userFirstName)
                    localStorage.setItem('pseudo', userPseudo)

                }
            })
    },
    getListMail({ commit }) {

        const pseudo = localStorage.getItem('pseudo')

        axios
            .get('/mailbox/' + pseudo)
            .then(res => {
                commit('setListMail', res.data.listMail)
            })
    },
    sendMail({}, payload) {
        const userId = localStorage.getItem('userId')

        axios
            .post('/mailbox/' + userId, {
                lastname: payload.lastname,
                firstname: payload.firstname,
                sujet: payload.sujet,
                author: payload.author,
                avatar: payload.avatar,
                content: payload.content,
                recipient: payload.recipients
            })
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
                        message: 'Ton message à été envoyer à ' + payload.recipients + ' !'
                    })

                }
            })
    },
    getListRecipient({ commit }) {
        axios
            .get('/recipientList')
            .then(res => {
                commit('setListRecipient', res.data.listRecipient)
            })
    },
    removeMailBox({}, payload) {

        axios
            .get(`/mailbox_delete/${payload}`)
            .then(res => {

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
                        message: 'Ton message à été supprimer !'
                    })

                    setTimeout(function() {
                        document.location.href = "#/profil_mailbox";
                    }, 1200);

                }

            })
    },
    getMailNotif({ commit }) {

        const pseudo = localStorage.getItem('pseudo')

        axios
            .get('/mailNotif/' + pseudo)
            .then(res => {
                commit('setMailNotif', res.data.notif)
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