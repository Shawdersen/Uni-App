<template>
	<view>
		<button type="default" plain="true" @tap="hello">按钮</button>
		<view>
			<uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change" />
		</view>
		<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30"
		 :second="0"></uni-countdown>
		<!-- 添加文本 -->
		<view>
			<view class="uni-padding-wrap uni-common-mt">
				<view class="text-box" scroll-y="true">
					<text>{{text}}</text>
				</view>
				<view class="uni-btn-v">
					<button type="primary" :disabled="!canAdd" @click="add">add line</button>
					<button type="warn" :disabled="!canRemove" @click="remove">remove line</button>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<image style="width:100%" src="../../static/img/c.jpeg"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<image style="width:100%" src="../../static/img/a.jpg"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">
								<image style="width:100%" src="../../static/img/b.jpg"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniCountdown from "@/components/uni-countdown/uni-countdown.vue"
	import uniCalendar from "@/components/uni-calendar/uni-calendar.vue"
	export default {
		components: {
			uniCalendar,
			uniCountdown
		},
		data() {
			return {
				texts: [
					'继续值班人员数据调出以及登陆功能'
				],
				text: '',
				canAdd: true,
				canRemove: false,
				extraLine: [],
				
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
	
			add: function(e) {
				this.extraLine.push(this.texts[this.extraLine.length % 12]);
				this.text = this.extraLine.join('\n');
				this.canAdd = this.extraLine.length < 12;
				this.canRemove = this.extraLine.length > 0;
			},
			remove: function(e) {
				if (this.extraLine.length > 0) {
					this.extraLine.pop();
					this.text = this.extraLine.join('\n');
					this.canAdd = this.extraLine.length < 12;
					this.canRemove = this.extraLine.length > 0;
				}
			},
			hello() {
				uni.request({
					url: 'https://youthapi.sdut.edu.cn/api/oa/signin',
					success: (res) => {
						console.log(res.data.data);
						this.text = 'request success';
					}
				});
			}


		}
	}
</script>
<style>
	text {
		font-size: 20px;
		text-align: center;
		color: #4CD964;

	}
</style>
