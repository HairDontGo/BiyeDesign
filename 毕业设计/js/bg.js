//文字
var txts = "01";
//转为数组
txts = txts.split("");
var matrix = document.getElementById("matrix");
var context = matrix.getContext("2d");
matrix.width = window.innerWidth;
matrix.height = window.innerHeight;

function displayWindowSize() {
	// 获取窗口的宽度和高度，不包括滚动条
	matrix.width = window.innerWidth;
	matrix.height = window.innerHeight;
}
// 将事件侦听器函数附加到窗口的resize事件
window.addEventListener("resize", displayWindowSize);
// 第一次调用该函数
displayWindowSize();
var drop = [];
var font_size = 18;
var columns = matrix.width / font_size;
for (var i = 0; i < columns; i++)
	drop[i] = 1;

function drawMatrix() {

	context.fillStyle = "rgba(0, 0, 0, 0.09)";
	context.fillRect(0, 0, matrix.width, matrix.height);

	context.fillStyle = "green";
	context.font = font_size + "px";
	for (var i = 0; i < columns; i++) {
		//随机取要输出的文字
		var text = txts[Math.floor(Math.random() * txts.length)];
		//输出文字，注意坐标的计算
		context.fillText(text, i * font_size, drop[i] * font_size); /*get 0 and 1*/

		if (drop[i] * font_size > (matrix.height * 2 / 3) && Math.random() > 0.95) /*reset*/
			drop[i] = 0;
		drop[i]++;
	}
}
setInterval(drawMatrix, 40);
