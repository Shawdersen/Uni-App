<template>
	<view>
	<button type="primary">hello world</button>
	<lw-button color="primary">hello</lw-button>
	            <view class="mu-alert mu-success-color mu-inverse">
	                this is a muse-ui for test
	            </view>
	</view>
</template>

<script>
	import {Button} from 'muse-ui';
	import 'muse-ui/dist/muse-ui.css';
    export default{
		components:{
		    lwButton:Button
		}
	}
</script>

<style>
</style>
