<template>
	<div class="layout layout--default" :class="{ 'layout--shifted': isMobileActive }">
		<lazy-the-header-sidebar-mobile class="layout__sidebar" v-if="$screen.mobile" />

		<div class="layout__wrapper">
			<the-header />

			<main class="layout__content">
				<router-view />
			</main>

			<lazy-the-footer />

			<lazy-custom-overlay :show="isMobileActive" @hide="toggleSidebar" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import TheHeader from '../components/header/TheHeader'
const LazyTheFooter = () => import( /* webpackChunkName: "TheFooter" */ '../components/footer/TheFooter')
const LazyTheHeaderSidebarMobile = () => import( /* webpackChunkName: "SidebarMobile" */ '../components/header/TheHeaderSidebarMobile')
const LazyCustomOverlay = () => import( /* webpackChunkName: "CustomOverlay" */ '../components/CustomOverlay')

export default {
	computed: {
		...mapGetters({
			isMobileActive: 'sidebar/isMobileActive',
		}),
	},
	components: {
		LazyTheHeaderSidebarMobile,
		LazyCustomOverlay,
		LazyTheFooter,
		TheHeader,
	},
	methods: {
		...mapMutations({
			toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
		}),
	}
}
</script>

<style lang="scss" scoped>
$transition-sidebar: transform 0.5s;

.layout {
	
	&--default {
		display: flex;
		height: 100%;
		width: 100vw;
		transition: $transition-sidebar;
		transform: translateX(0);
	}

	&__wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100vw;
	}

	&__content {
		flex: 1 0 auto;
	}

	&--shifted {
		transform: translateX(200px);
	}

	&__sidebar {
		position: absolute;
		left: -200px;
	}
}
</style>
