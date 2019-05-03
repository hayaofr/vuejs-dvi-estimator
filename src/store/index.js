import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            vuedenez: "0",
            techno: "0",
            confiance: "0",
            murphy: "0",
            libelleMurphy: "",
            result: "0"
        },
        mutations: {
            setVuedenez(state, value) {
                state.vuedenez = value
            },
            setTechno(state, value) {
                state.techno = value
            },
            setConfiance(state, value) {
                state.confiance = value
            },
            setMurphy(state, value) {
                state.murphy = value
            },
            setLibelleMurphy(state, value) {
                state.libelleMurphy = value
            },
            setResult(state, value) {
                state.result = value
            }
        }
    }
)
