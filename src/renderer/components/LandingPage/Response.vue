<template>
	<div class="row">
		<div class="col">
			<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
				<h5 class="text-secondary">Corpo do Response Body</h5>
				<!-- <pre v-highlightjs>{{ resBody | pretty(type) }}</pre> -->
				<pre v-highlightjs="resBody"><code class="json"></code></pre>
			</div>
		</div>
	</div>
</template>

<script>
	import {pd} from 'pretty-data'

	export default {
		data() {
			return {
				res: ''
			}
		},
		props: {
			resBody: '',
			type: ''
		},
		mounted: function() {
			
		},
		filters: {
			pretty: function(value, type) {
				// console.log(value)
				// console.log(type)
				if (!value.length) return ''

				if (type === 'xml') {
					return pd.xml(value)
				} else if (type === 'json') {
					return pd.json(value)
				} else {
					return value
				}

				// return JSON.stringify(JSON.parse(value), null, 2);
			}
		}
	}
</script>