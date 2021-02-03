<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<link rel="stylesheet" type="text/css" href="./css/all.css" />
		<link rel="stylesheet" type="text/css" href="./css/footer.css"/>
		<script src="./js/vue.js"></script>
	</head>
	<body>
		<footer>
			<div id="footer_top">
				<div v-for="(li,ul) in ul">
					<ul >
						{{ul}}
						<li>---</li>
						<li>{{li}}</li>
					</ul>
				</div>
			</div>
			<script>
				new Vue({
					el:'#footer_top',
					data:{
						ul:{
								访问:'aa',
								什么:'bb',
								百度:'cc',
						}
					}
				})
			</script>
			<div id="footer_bottom">
				<p><span>Copyright © 2008-2020 FUNDAMENTALS OF COMPUTER CULTURE Learing System Online,ALL rights reserved.</span></p>
				<p> <span> liuqiulin 版权所有 </span> | <a href="http://www.baidu.com" target="_blank">百度一下</a> 提供技术支持 | <a href="#">服务协议</a> | 电话：13025309445</p>
			</div>
		</footer>
	</body>
</html>
