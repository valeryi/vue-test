<template>
	<b-container>
		<b-row>
			<b-col>
				<div>
					<button @click="toggleSidebarMobile">show sidebar</button>
				</div>
			</b-col>
			<b-col>
				<div>
					<button @click="toggleSidebarMobile">show sidebar</button>
				</div>
			</b-col>
			<b-col>
				<div>
					<button @click="toggleSidebarMobile">show sidebar</button>
				</div>
			</b-col>
		</b-row>

		<b-row>
			<p>Give your favourite pair of prescription glasses (or sunglasses) a new lease of life with our premium lens replacement service starting from only ₴979.75 including lenses. Offering great value, this service is perfect for those looking to extend the life of their existing eyewear.</p>
		</b-row>
	</b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name: 'LensReplacementPage',
	methods: {
		...mapMutations({
			toggleSidebarMobile: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
		}),
	}
}
</script>
