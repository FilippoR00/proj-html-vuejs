<template>
	<div class="bg">
		<div class="gradient"></div>
	</div>
</template>

<script>
export default {
	name: "Jumbo",
};
</script>

<style lang="scss" scoped>
@import "../../style/Global.scss";

.bg {
	height: 100vh;
	background-image: url("../../assets/img/hero-07-2x.jpg");
	background-size: cover;
	.gradient {
		position: absolute;
		height: 100vh;
		width: 100%;
		background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%); 
	}
}
</style>