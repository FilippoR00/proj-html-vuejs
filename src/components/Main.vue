<template>
	<div>
        <MoreBanner/>
	</div>
</template>

<script>
	import MoreBanner from './sections/MoreBanner.vue'


	export default {
		name: 'Main',
        components: {
            MoreBanner,
        }
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>