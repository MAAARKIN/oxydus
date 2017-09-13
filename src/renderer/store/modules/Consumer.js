import Delivery from '../../service/delivery'

const state = {
	res: {},
	request: {
		verb: '',
		url: '',
		headers: {},
		body: ''
	},
	response: {
		status: 0,
		statusText: '',
		data: {},
		headers: {}
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
	},
	POPULATE_RESPONSE(state, payload) {
		if (payload) {
			state.response.status = payload.status
			state.response.statusText = payload.statusText
			state.response.data = payload.data
			state.response.headers = payload.headers
		}
	},
	POPULATE_RESPONSE_BODY(state, data) {
		if (data) {
			state.response.data = data
		}
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
    commit('POPULATE_RESPONSE', response)
    commit('POPULATE_RES', response)
    

    let headers = state.response.headers
    if (headers['content-type'] && headers['content-type'].includes('json')) {
    	let data = state.response.data
    	// console.log(data)
    	let pretty = JSON.stringify(data, undefined, 4)
    	commit('POPULATE_RESPONSE_BODY', pretty)
    }
    
    console.log(state.response.data)
  }
}

export default {
	state,
	mutations,
	actions
}
