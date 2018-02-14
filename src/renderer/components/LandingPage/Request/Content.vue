<template>
	<div class="row" style="margin-bottom: 1rem;">
		<div class="col">
			<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
				<h5 class="text-secondary">Corpo do Request Body</h5>

				<div class="row">
					<div class="col-4">headers</div>
					<div class="col" style="min-height: 200px; padding: 10px;">
						<div v-show="isPostOrPut" id="editor" class="rounded" >{{body}}</div>
					</div>
				</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		props: {
			value: {},
			verb: ''
		},
		computed: {
			body: function() {
				if (this.value) {
					return this.value
				} else {
					return '{}'
				}
			},
			isPostOrPut: function() {
				return (this.verb == 'POST' || this.verb == 'PUT')
			}
		},
		methods: {
			teste: function() {
				console.log('rodou')
				console.log(this.body)
				let obj = JSON.parse(this.body)
				let pretty = JSON.stringify(obj, undefined, 4)
				this.$store.commit('POPULATE_BODY', pretty)
			}
		},
		mounted: function() {
			let self = this
			let editor = ace.edit("editor")
			editor.setTheme("ace/theme/monokai")
			editor.getSession().setMode("ace/mode/javascript")
			editor.setOption("showPrintMargin", false)
			editor.getSession().on("change", function(e) {
				console.log(editor.getSession().getValue())
				self.$store.commit('POPULATE_BODY', editor.getSession().getValue())
			})
		}
	}
</script>

<style type="text/css" media="screen">
	#editor { 
		position: absolute;
		top: 0;
		right: 20px;
		bottom: 0;
		left: 0;
	}
</style>