<template>
	<div>
        <MoreBanner/>
        <Banner/>
        <Audiobook/>
        <Testimonials/>
        <Events/>
	</div>
</template>

<script>
	import MoreBanner from './sections/MoreBanner.vue'
	import Banner from './sections/Banner.vue'
	import Audiobook from './sections/Audiobook.vue'
	import Testimonials from './sections/Testimonials.vue'
	import Events from './sections/Events.vue'






	export default {
		name: 'Main',
        components: {
            MoreBanner,
            Banner,
            Audiobook,
            Testimonials,
            Events,
            
        }
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>