<template>
	<component :is="layout"></component>
</template>

<script>
import DefaultLayout from './layouts/default'

export default {
	name: 'DefaultLayout',
	components: {
		default: DefaultLayout,
	},
	computed: {
		layout() {
			return `${this.$route.meta.layout || 'default'}`
		}
	}
}
</script>
