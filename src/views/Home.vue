<template>
	<div>
		{{ $store.getters['counter/getCounter'] }}
		<button @click="increase">increase</button>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
	methods: {
		increase: function () {
			this.$store.commit('counter/SET_COUNTER')
		}
	}
}
</script>
