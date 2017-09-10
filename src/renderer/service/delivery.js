// import {HTTP} from '../helper/http-common'
import HTTP from 'axios'

function send(request) {
	console.log("Send called")
	if (request.verb === 'POST') {
		console.log("POST")
		post(request.url, request.payload)
	} else if (request.verb ==='GET') {
		console.log("GET")
		return get(request.url)
	}
}

function post(url, payload) {
	console.log("POST")
	HTTP.post(url, payload)
	.then(response => {
		console.log(response)
	})
	.catch(error => {
		console.log('error: '+error)
	})
}

async function get(url) {
	return await HTTP.get(url)
	.then(response => {
		console.log(response)
		return response;
	})
	.catch(error => {
		console.log(error)
	})
}

export default {send}
