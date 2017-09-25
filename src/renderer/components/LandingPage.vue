<template>
	<div class="container-fluid" style="background-color: #f0f0f0">
		<navbar></navbar>
		<history></history>
		<main class="max-height content-view" style="left: 280px; padding: 10px 20px 0 20px;">
			<div class="row" style="margin-bottom: 80px;">
				<div class="col">
					<request></request>
					<response :resBody="resBody" :type="type"></response>
					
				</div>
			</div>
		</main>

	</div>
</template>

<script>
	import SystemInformation from './LandingPage/SystemInformation'
	import Navbar from './LandingPage/Navbar'
	import History from './LandingPage/History'
	import Response from './LandingPage/Response'
	import Request from './LandingPage/Request'

	export default {
		name: 'landing-page',
		components: { SystemInformation, Navbar, History, Response, Request},
		computed: {
			resBody: function() {
				// let teste = this.$store.state.Consumer.response.data
				// return teste
				return this.$store.state.Consumer.response.data
			},
			type: function() {
				return this.$store.state.Consumer.response.type
			}
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html, body, #app, .container-fluid { height: 100%; }
	body { font-family: 'Source Sans Pro', sans-serif;}

	#app {
		height: 100%;
	}
	.max-height {
		height: 100%;
	} 

	#logo {
		height: auto;
		margin-bottom: 20px;
		width: 420px;
	}

	.footer {
		position: relative;
		height: 50px;
		bottom: 0;
		width: 100%;
	}

	.ui-lay-l {
		width: 280px;
		position: fixed;
		left: 0;
		top: 50px;
		bottom: 0;
		overflow: hidden;
	}

	.ui-lay-l p {
		color: white;
	}

	.content-view {
		top: 50px;
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
	}
</style>
