<template>
	<div class="row">
		<div class="col">
			<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
				<h5 class="text-secondary">Corpo do Response Body</h5>
				<pre>{{ resBody | pretty }}</pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				res: ''
			}
		},
		props: {
			resBody: ''
		},
		filters: {
			pretty: function(value) {
				console.log(value)
				if (!value.length) return ''


				return JSON.stringify(JSON.parse(value), null, 2);
			}
		}
	}
</script>