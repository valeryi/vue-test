<template>
	<header class="header">
		<the-discount-label />
		<the-header-toolbar @toggleSidebar="toggleSidebar" />
		<the-header-breadcrumb />
	</header>
</template>

<script>
import { mapMutations } from 'vuex'

import TheHeaderToolbar from './TheHeaderToolbar'
import TheDiscountLabel from '../TheDiscountLabel'
import TheHeaderBreadcrumb from './TheHeaderBreadcrumb.vue'

export default {
	methods: {
		...mapMutations({
			toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
		}),
	},
	components: {
    TheHeaderToolbar,
    TheDiscountLabel,
    TheHeaderBreadcrumb
},
}
</script>

<style lang="scss" scoped>

</style>
