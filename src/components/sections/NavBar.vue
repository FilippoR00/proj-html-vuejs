<template>
	<div class="navbar">
		<div>
			<img src="../../assets/author-logo-round.png" alt="Logo" class="logo"/>
		</div>
		<div>
			<ul>
				<li v-for="(item, index) in dataShared.navBar" :key="index">
					<a href="#" v-if="!item.drop" class="link">{{item.name}}<i v-if="item.html" :class="item.class"></i></a>
					<a href="#" v-if="item.drop" class="drop_down link">
						<div class="drop">{{item.name}}<i class="fas fa-chevron-down"></i></div>
						<div class="opt">
							<div><a href="#" class="opt1">{{item.option1}}</a></div>
							<div><a href="#" class="opt2">{{item.option1}}</a></div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import dataShared from "../../share/dataShared.js";

export default {
	name: "NavBar",
	data() {
		return {
			dataShared,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../../style/Global.scss";
.navbar {
	width: 100%;
	padding: 0px 90px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: 150px;
	position: absolute;
	z-index: 9999;
	img {
		height: 150px;
	}
	ul{
		height: 80px;
		list-style: none;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		li{
			display: flex;
			.link{
				height: 100%;
				padding: 0px 5px;
				line-height: 100px;
				margin-left: 40px;
				color: white;
				text-decoration: none;
				transition: 0.5s;
				border-top: 5px solid transparent;
				overflow: hidden;
			}
			.link:hover{
				color: $saffron;
				border-top: 5px solid $saffron;
				.opt{
					opacity: 1;
				}
				overflow: visible;
			}
			.drop_down{
				position: relative;
				.fa-chevron-down{
					margin-left: 8px;
					font-size: 10px;
				}
				.opt{
					transition: 0.5s;
					opacity: 0;
					width: 150px;
					height: 100px;
					background-color: $black;
					position: absolute;
					top: 80px;
					left: 0px;
					div{
						transition: 0.5s;
						line-height: 50px;
						width: 100%;
						a{
							padding: 10px;
							color: white;
							text-decoration: none;
						}
					}
					div:hover{
						background-color: $tundora;
					}
				}
			}
		}
	}
}
</style>