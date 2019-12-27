<template>
	<view>
		
		
		
		<Amine v-if="PageCur=='Amine'"></Amine>
		<Home v-if="PageCur=='Home'"></Home>
		<Steven v-if="PageCur=='Steven'"></Steven>
		
		
		<!-- this is fucking navigator,I will fuckin finish the API to login in later with ES6 -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="Amine">
				<view :class="PageCur=='Amine'?'text-green':'text-gray'">home</view>
			</view>
			<view class="action" @click="NavChange" data-cur="Steven">
				<view :class="PageCur=='Steven'?'text-green':'text-gray'">love</view>
			</view>
			<view class="action" @click="NavChange" data-cur="Home">	
				<view :class="PageCur=='Home'?'text-green':'text-gray'">Amalie</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'Amine'
			}
		},
		methods: {
			NavChange: function(e) {
				console.log(e)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
  html{
	  color:black
  }
</style>
