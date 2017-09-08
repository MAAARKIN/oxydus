import axios from 'axios';

const HTTP = axios.create({
	baseURL: 'https://httpbin.org/'
})

export {HTTP};