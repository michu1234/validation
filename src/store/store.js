import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export let store = new Vuex.Store({
    state: {
        email: "",
        domain: "",
        organization: "",
        name: "",
        lastname: "",
        password: ""
    },
    mutations: {
        updateEmail(state, a) {
                state.email = a;
        },
        updateDomain(state, a) {
                state.domain = a;
        },
        updateOrganization(state, a) {
                state.organization = a;
        },
        updateForm(state, a) {
             state.name = a.name;
             state.lastname = a.lastname;
             state.password = a.password;
        }
    }
})