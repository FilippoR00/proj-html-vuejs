<template>
	<div>
        <MoreBanner/>
        <Banner/>
        <Audiobook/>
        <Testimonials/>
	</div>
</template>

<script>
	import MoreBanner from './sections/MoreBanner.vue'
	import Banner from './sections/Banner.vue'
	import Audiobook from './sections/Audiobook.vue'
	import Testimonials from './sections/Testimonials.vue'





	export default {
		name: 'Main',
        components: {
            MoreBanner,
            Banner,
            Audiobook,
            Testimonials,
            
        }
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>