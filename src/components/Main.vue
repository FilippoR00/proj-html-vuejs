<template>
	<div>
        <MoreBanner/>
        <Banner/>
        <Audiobook/>
	</div>
</template>

<script>
	import MoreBanner from './sections/MoreBanner.vue'
	import Banner from './sections/Banner.vue'
	import Audiobook from './sections/Audiobook.vue'




	export default {
		name: 'Main',
        components: {
            MoreBanner,
            Banner,
            Audiobook,
            
        }
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>