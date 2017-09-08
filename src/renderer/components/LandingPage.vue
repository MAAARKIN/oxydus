<template>
	<div class="container-fluid" style="background-color: #f0f0f0">
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a class="navbar-brand" href="#">Fixed navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>
				<form class="form-inline mt-2 mt-md-0">
					<input class="form-control mr-sm-2" type="text" placeholder="Maybe..." aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Maybe...</button>
				</form>
			</div>
		</nav>
		<section class="ui-lay-l bg-dark" style="padding: 10px 20px 0 20px;">
			<p>historico</p>
		</section>
		<main class="max-height content-view" style="left: 280px; padding: 10px 20px 0 20px;">
			<div class="row max-height">
				<div class="col">
					<div class="form-group">
						<small id="urlHelp" class="form-text text-muted">Request</small>
						<div class="form-row">
							<div class="col">
								<input type="text" v-model="url" class="form-control" id="exampleInputEmail1" aria-describedby="urlHelp" placeholder="http://your-url:PORT/api/example">
							</div>

							<div class="col-2">
								<select class="custom-select" style="width: 200px;" v-model="verb">
									<option value="POST">POST</option>
									<option value="GET">GET</option>
									<option value="PUT">PUT</option>
									<option value="DELETE">DELETE</option>
								</select>
							</div>

							<div>
								<button @click.prevent="send" type="button" class="btn btn-primary">Enviar</button>
							</div>
						</div>
					</div>
					<img id="logo" src="~@/assets/logo.png" alt="electron-vue">
					<div class="row" style="margin-bottom: 1rem;">
						<div class="col">
							<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
								<h5 class="text-secondary">Corpo do Request Body</h5>

								<span>Selecionado: {{ verb }}</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
								<h5 class="text-secondary">Corpo do Response Body</h5>
								<span>{{resBody}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

	</div>
</template>

<script>
	import SystemInformation from './LandingPage/SystemInformation'

	export default {
		name: 'landing-page',
		components: { SystemInformation },
		methods: {
			open (link) {
				this.$electron.shell.openExternal(link)
			},

			send () {
				this.$store.dispatch('sendToServer', {verb: this.verb, url: this.url})
			}
		},
		data() {
			return {
				verb: 'POST',
				url: ''
			}
		},
		computed: {
			resBody: function() {
				return this.$store.state.Consumer.res
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
