/**
 * Store Auth
 *
 *************/

import axios from 'axios'
import { Notify } from 'quasar'

const state = {
    loggedIn: false,
    logged: false,
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
                if(err === true){

                    Notify.create({color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: "L'adresse email éxiste déjà !"})

                }else{

                    if(err2 === true){

                        Notify.create({color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: "Le pseudo éxiste déjà !"})

                    }else{

                         Notify.create({color: 'green-5',
                        textColor: 'white',
                        icon: 'check',
                        message: 'Ton inscription est pris en compte !'})

                        setTimeout(function(){ 
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
                if(err === true){
                    Notify.create({color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: "Ton compte n'éxiste pas !"})
                }

                // User banni
                if(err2 === true){
                    Notify.create({color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: "Ton compte à été banni !"})
                }

                // User banni
                if(err3 === true){
                    Notify.create({color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: "Le mot de passe ne correspond pas !"})
                }

                // Modif --> 15/02/2021
                localStorage.setItem('token', res.data.sess.token)
                localStorage.setItem('status', res.data.sess.status)
                localStorage.setItem('email', res.data.sess.email)
                localStorage.setItem('pseudo', res.data.sess.pseudo)

                const sess = localStorage.getItem('status')

                if (sess === 'user') {

                    Notify.create({color: 'green-5',
                    textColor: 'white',
                    icon: 'check',
                    message: `Bienvenue ${res.data.sess.pseudo}`})

                    setTimeout(function(){ 
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
                    document.location.href = "/";
                }
            })
    },
    logoutUser({ commit }) {
        axios
            .get('/logout')
            .then((res) => {

                Notify.create({color: 'green-5',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: `Merci de ta visite ${localStorage.getItem('pseudo')} à bientôt !`})

                setTimeout(function(){ 
                        localStorage.removeItem('sess', null)
                        localStorage.removeItem('token', null)
                        localStorage.removeItem('status', null)
                        localStorage.removeItem('email', null)
                        localStorage.removeItem('pseudo', null)

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
                if(err === true){
                    Notify.create({color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: "Le compte n'éxiste pas !"})
                }

                if(succ === true){
                    Notify.create({color: 'green-5',
                    textColor: 'white',
                    icon: 'check',
                    message: "Un e-mail a été envoyé pour réinitialiser ton mot de passe !"})
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

                if(token){
                    console.log('test');
                }else{
                    document.location.href = "/";
                }
                
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