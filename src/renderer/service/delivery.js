// import {HTTP} from '../helper/http-common'
import HTTP from 'axios'

function send(request) {
	console.log("Send called")
	if (request.verb === 'POST') {
		console.log("POST")
		return postRequest(request.url, request.body)
	} else if (request.verb === 'GET') {
		console.log("GET")
		return getRequest(request.url)
	} else if (request.verb === 'PUT') {
		console.log("PUT")
		return putRequest(request.url, request.body)
	} else if (request.verb === 'DELETE') {
		console.log("DELETE")
		return deleteRequest(request.url)
	}
}

async function postRequest(url, payload) {
	console.log(payload)
	return await HTTP.post(url, payload)
	.then(response => {
		console.log(response)
		return response;
	})
	.catch(error => {
		console.log('error: '+error)
	})
}

async function getRequest(url) {
	return await HTTP.get(url)
	.then(response => {
		console.log(response)
		return response;
	})
	.catch(error => {
		console.log(error)
	})
}

async function putRequest(url, payload) {
	console.log("PUT")
	return await HTTP.put(url, payload)
	.then(response => {
		console.log(response)
		return response;
	})
	.catch(error => {
		console.log('error: '+error)
	})
}

async function deleteRequest(url) {
	return await HTTP.delete(url)
	.then(response => {
		console.log(response)
		return response;
	})
	.catch(error => {
		console.log(error)
	})
}

export default {send}
