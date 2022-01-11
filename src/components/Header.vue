<template>
	<div>
		<NavBar/>
		<Jumbo/>
	</div>
</template>

<script>
	import NavBar from './sections/NavBar.vue'
	import Jumbo from './sections/Jumbo.vue'

	export default {
		name: 'Header',
		components: {
			NavBar,
			Jumbo
		}
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";
</style>
