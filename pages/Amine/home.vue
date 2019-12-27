<template>
	<view>
		<view>
			<form @submit="formSubmit">
				<view class="uni-form-item uni-column">
					<input class="uni-input" name="username" placeholder="这是一个输入框" />
				</view>
				<view class="uni-form-item uni-column">
					<input class="uni-input" password type="text" name="password" placeholder="your password" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">Log in</button>

				</view>

			</form>

		</view>


	</view>
</template>
<script>
	import moment from 'moment';
	import { checkLogin } from '@/utils/auth';
	
	export default {
		mounted() {
       if (checkLogin() === 1) {
        console.log("have fuckin login")
       }
	   else{
		   console.log("haven't log in")
	   }
      }
		methods: {
			formSubmit: function(e) {
				swal("茜茜u are stupid");
				var formdata = e.detail.value
				uni.request({

					url: 'https://youthapi.sdut.edu.cn/api/oa/login',
					method: 'POST',
					data: {
						username: formdata.username,
						password: formdata.password
					},
					header: {
						'custom-header': 'this is a test of uni.request by Steven.Shaw' //自定义请求头信息
					},
					success: (res) => {
						console.log(res.data);
						
						const {
							access_token,
							expires_in
						} = res.data.data;
                       //console.log(access_token)
						const expires_at = moment()
							.add(expires_in, 'second')
							.format('YYYY-MM-DD HH:mm:ss');
						sessionStorage.clear();
						sessionStorage.setItem('token', access_token);
						sessionStorage.setItem('expires_at', expires_at);
					},

				});

			}

		},
	}
</script>

<style>

</style>
