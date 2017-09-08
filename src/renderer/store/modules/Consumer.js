import Delivery from '../../service/delivery'

const state = {
  res: {},
  url: '',
  verb: '',
  body: {}
}

// sao sincronos
const mutations = {
  CLEAR_RES (state) {
    state.res = {}
  },
  POPULATE_RES (state, payload) {
    state.res = payload
  },
  POPULATE_BODY (state, payload) {
    state.body = payload
  }, 
  POPULATE_VERB (state, verb) {
    state.verb = verb
  },
  POPULATE_URL (state, url) {
    state.url = url
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
