<template>
	<div class="tabberWarp" >
		<div class="warp">
			<Item :txt='item.txt' :page='item.page' @change='getVal' v-for='(item,index) in tabbarDes':key="index":sel='selected'>
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</Item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Item from './Item'
	export default{
		components:{
			Item
		},
		data:function(){
			return{
				selected:'homepage',
				tabbarDes:[
					{
						txt:'首页',
						page:'homepage',
						normalImg:require('../../assets/images/HomePage1.png'),
						activeImg:require('../../assets/images/HomePage2.png')
						
					},				
					{
						txt:'会员',
						page:'member',
						normalImg:require('../../assets/images/Member1.png'),
						activeImg:require('../../assets/images/Member2.png')
					},
					{
						txt:'订单',
						page:'order',
						normalImg:require('../../assets/images/Order1.png'),
						activeImg:require('../../assets/images/Order2.png')
					},
					{
						txt:'我的',
						page:'personalcenter',
						normalImg:require('../../assets/images/PersonalCenter1.png'),
						activeImg:require('../../assets/images/PersonalCenter2.png')
					}
				]
			}
		},
		methods:{
			getVal:function(res){
				this.selected = res;
				sessionStorage.setItem("selected", this.selected);
			}
		},
		mounted() {
			if(sessionStorage.getItem("selected")== null){
				this.selected= "";
			}else{
				this.selected = sessionStorage.getItem("selected");
			}
  }
	}
</script>
<style type="text/css">
	.warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 20px;
		height: 20px;
	}
	.tabberWarp img{
		margin-top: 10px;
		margin-bottom: 5px;
 
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: 5px;
		background: #fff;
	}

</style>
