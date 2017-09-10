<template>
	<div>
		<div class="form-group">
			<small id="urlHelp" class="form-text text-muted">Request</small>
			<div class="form-row">
				<div class="col">
					<input type="text" v-model="url" class="form-control" aria-describedby="urlHelp" placeholder="http://your-url:PORT/api/example">
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

		Selecionado: {{ verb }}
		<br/>
		Selecionado: {{ body }}

		<content-body :value="body"></content-body>
	</div>
</template>

<script>
	import ContentBody from './Request/Content'

	export default {
		components: {ContentBody},
		data() {
			return {
				verb: 'POST',
				url: ''
			}
		},
		computed: {
			body: function() {
				return this.$store.state.Consumer.request.body
			}
		},
		methods: {
			send () {
				this.$store.commit('POPULATE_VERB', this.verb)
				this.$store.commit('POPULATE_URL', this.url)
				this.$store.dispatch('sendToServer')
			}
		}
	}
</script>