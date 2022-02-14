<template>
	<header class="header">
		<the-header-discount-label />
		<the-header-toolbar @toggleSidebar="toggleSidebar" />
		<the-header-breadcrumb />
	</header>
</template>

<script>
import { mapMutations } from 'vuex'

import TheHeaderToolbar from './TheHeaderToolbar'
import TheHeaderDiscountLabel from './TheHeaderDiscountLabel'
import TheHeaderBreadcrumb from './TheHeaderBreadcrumb.vue'

export default {
	methods: {
		...mapMutations({
			toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
		}),
	},
	components: {
		TheHeaderToolbar,
		TheHeaderDiscountLabel,
		TheHeaderBreadcrumb
	},
}
</script>
