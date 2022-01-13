<template>
	<div>
        <MoreBanner/>
        <Banner/>
        <Audiobook/>
        <Testimonials/>
        <Events/>
        <Newsletter/>
        <CardSection/>
        <Articles/>
	</div>
</template>

<script>
	import MoreBanner from './sections/MoreBanner.vue'
	import Banner from './sections/Banner.vue'
	import Audiobook from './sections/Audiobook.vue'
	import Testimonials from './sections/Testimonials.vue'
	import Events from './sections/Events.vue'
	import Newsletter from './sections/Newsletter.vue'
	import CardSection from './sections/CardSection.vue'
	import Articles from './sections/Articles.vue'

	export default {
		name: 'Main',
        components: {
            MoreBanner,
            Banner,
            Audiobook,
            Testimonials,
            Events,
            Newsletter,
            CardSection,
            Articles
        }
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>