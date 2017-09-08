// import {HTTP} from '../helper/http-common'
import HTTP from 'axios'

function send(verb, url, payload) {
	console.log("Send called")
	if (verb === 'POST') {
		console.log("POST")
		post(url, payload)
	} else if (verb ==='GET') {
		console.log("GET")
		return get(url)
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
