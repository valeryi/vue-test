<template>
	<header class="header">
		<the-header-discount-label />
		<lazy-the-header-logo-section />
		<the-header-toolbar @toggleSidebar="toggleSidebar" />
		<the-header-breadcrumb />
	</header>
</template>

<script>
import { mapMutations } from 'vuex'

import TheHeaderToolbar from './TheHeaderToolbar'
import TheHeaderDiscountLabel from './TheHeaderDiscountLabel'
import TheHeaderBreadcrumb from './TheHeaderBreadcrumb.vue'

const LazyTheHeaderLogoSection = () => import(`./TheHeaderLogoSection.vue`)

export default {
	methods: {
		...mapMutations({
			toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
		}),
	},
	components: {
		TheHeaderToolbar,
		TheHeaderDiscountLabel,
		TheHeaderBreadcrumb,
		LazyTheHeaderLogoSection,
	},
}
</script>
