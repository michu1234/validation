import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export let store = new Vuex.Store({
  state: {
    userInfo: [{
        email: ""
      },
      {
        domain: ""
      },
      {
        organization: ""
      },
      {
        name: ""
      },
      {
        lastname: ""
      },
      {
        password: ""
      }
    ]
  },
  getters: {
    returnKeys(state) {
      for (let i = 0; i < state.userInfo.length; i++) {
       
          return state.userInfo[i];
        
      }
    }
  },
  mutations: {
    updateEmail(state, a) {
      state.userInfo[0].email = a;
    },
    updateDomain(state, a) {
      state.userInfo[0].domain = a;
    },
    updateOrganization(state, a) {
      state.userInfo[0].organization = a;
    },
    updateForm(state, a) {
      state.userInfo[0].name = a.name;
      state.userInfo[0].lastname = a.lastname;
      state.userInfo[0].password = a.password;
    }
  }
})
