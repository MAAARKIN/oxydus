<template>
	<div class="row" style="margin-bottom: 1rem;">
		<div class="col">
			<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
				<h5 class="text-secondary">Corpo do Request Body</h5>

				<div class="row">
					<div class="col-6">esquerda</div>
					<div class="col-6" style="min-height: 200px; padding: 10px;">
						<div id="editor">function foo() {}</div>
					</div>
					
				</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		props: {
			value: {}
		},
		data() {
			return {
				body: this.value
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
			let editor = ace.edit("editor");
			editor.setTheme("ace/theme/monokai");
			editor.getSession().setMode("ace/mode/javascript");
		}
	}
</script>

<style type="text/css" media="screen">
	#editor { 
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>