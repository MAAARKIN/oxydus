import Delivery from '../../service/delivery'
import axios from 'axios'

const state = {
  res: {}
}

// sao sincronos
const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }, 
  CLEAR_RES (state) {
    state.res = {}
  },
  POPULATE_RES (state, payload) {
    state.res = payload
  }
}

// sao assincronos
const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },

  async sendToServer ({commit}, payload) {
    commit('CLEAR_RES')
    console.log('send to server called')
    const response = await Delivery.send(payload.verb, payload.url, payload.body);
    console.log(response)
    commit('POPULATE_RES', response)
  }
}

export default {
  state,
  mutations,
  actions
}
