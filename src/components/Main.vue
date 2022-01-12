<template>
	<div>
        <MoreBanner/>
        <Banner/>
	</div>
</template>

<script>
	import MoreBanner from './sections/MoreBanner.vue'
	import Banner from './sections/Banner.vue'



	export default {
		name: 'Main',
        components: {
            MoreBanner,
            Banner,
        }
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>