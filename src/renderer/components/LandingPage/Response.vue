<template>
	<div class="row">
		<div class="col">
			<div class="border border-secondary rounded" style="min-height: 200px; padding: 10px;">
				<h5 class="text-secondary">Corpo do Response Body</h5>
				<span>{{resBody}}</span>
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
		}
	}
</script>