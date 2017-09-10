import Delivery from '../../service/delivery'

const state = {
  res: {},
  request: {
    verb: '',
    url: '',
    headers: {},
    body: ''
  }
}

// sao sincronos
const mutations = {
  CLEAR_RES (state) {
    state.res = {}
  },
  POPULATE_RES (state, payload) {
    state.res = payload
  },
  POPULATE_BODY (state, body) {
    state.request.body = body
  }, 
  POPULATE_VERB (state, verb) {
    state.request.verb = verb
  },
  POPULATE_URL (state, url) {
    state.request.url = url
  }
}

// sao assincronos
const actions = {
  async sendToServer ({commit, state}, ) {
    commit('CLEAR_RES')
    console.log('send to server called')
    // const response = await Delivery.send(payload.verb, payload.url, payload.body);
    const response = await Delivery.send(state.request)
    console.log(response)
    commit('POPULATE_RES', response)
  }
}

export default {
  state,
  mutations,
  actions
}
