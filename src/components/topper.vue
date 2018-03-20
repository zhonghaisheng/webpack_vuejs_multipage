<template>
<div class="topper">
	<div class="gameMsg fl">
		<img :src="gameIcon" class="gameIcon fl">
		<div class="content fl">
			<p class="gameName">草帽大本营</p>
			<p class="gameDesc">女帝欧派后援会</p>
		</div>
		<div class="search-box fr">
			<input type="text" class="search-content" placeholder="输入关键字"><span class="search-tag"></span>
		</div>
	</div>	
</div>
</template>

<script>
export default {
	name:'topper',
	data () {
		return {
			gameIcon:commonConfiguration.gameIcon,
			gameName:commonConfiguration.gameName,
			gameDesc:commonConfiguration.gameDesc
		}
	}
}
</script>
<style scoped lang="scss">
	$bg_url:"../images";
	$baseSize:(750/16);
	@function pxToRem($px) {
	  @return $px / $baseSize * 1rem;
	}

	@mixin bg_center($url){
		background:url(#{$bg_url}/#{$url}) center top no-repeat;
		background-size:100%  100%;
	}

	.topper{
		background:#f8f0e5;
		overflow: hidden;
		width:100%;
		position: relative;
		.gameIcon{
			width:pxToRem(106);
			height: pxToRem(106);
			margin:pxToRem(12) 0 pxToRem(12) pxToRem(30);
		}
		.content{
			margin:pxToRem(24) pxToRem(86) 0 pxToRem(10);
			.gameName{
				color:#000000;
				font-size: pxToRem(30);
				font-weight: bold;
			}
			.gameDesc{
				color:#000000;
				font-size: pxToRem(24);
				margin-top: pxToRem(4);
			}
		}
		.search-box{
			background:#ffffff;
			border-radius: pxToRem(6);
			-webkit-border-radius: pxToRem(6);
			width:pxToRem(316);
			height: pxToRem(60);
			position: absolute;
			right: pxToRem(30);
			top:pxToRem(36);
			.search-content{
				font-size: pxToRem(24);
				width:pxToRem(248);
				height: pxToRem(60);
				vertical-align: top;
				text-indent: pxToRem(6);
				margin-left:pxToRem(6);
			}
			.search-tag{
				@include bg_center('../img/search-icon.png');
				background-size:45%;
				background-position:center;
				display: inline-block;
				vertical-align: top;
				width:pxToRem(316-248-6);
				height: pxToRem(60);
				line-height: pxToRem(60);
			}
		}
	}
</style>