import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            gender: "",
            phone: "",
            birthdate: "",
            country: "",
            state: "",
            city: "",
            street: "",
            zipcode: "",
            facebook: "",
            google: "",
            twitter: "",
            linkedin: "",
            instagram: ""
        },
        mutations: {
            setFirstname(state, value) {
                state.firstname = value
            },
            setLastname(state, value) {
                state.lastname = value
            },
            setEmail(state, value) {
                state.email = value
            },
            setPassword(state, value) {
                state.password = value
            },
            setGender(state, value) {
                state.gender = value
            },
            setPhone(state, value) {
                state.phone = value
            },
            setBirthdate(state, value) {
                state.birthdate = value
            },
            setCountry(state, value) {
                state.country = value
            },
            setState(state, value) {
                state.state = value
            },
            setCity(state, value) {
                state.city = value
            },
            setStreet(state, value) {
                state.street = value
            },
            setZipcode(state, value) {
                state.zipcode = value
            },
            setFacebook(state, value) {
                state.facebook = value
            },
            setGoogle(state, value) {
                state.google = value
            },
            setTwitter(state, value) {
                state.twitter = value
            },
            setLinkedin(state, value) {
                state.linkedin = value
            },
            setInstagram(state, value) {
                state.instagram = value
            },
        }
    }
)