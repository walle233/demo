function ajax (url,fnSucc) {
	//1.创建ajax对象
	if (window.XMLHttpRequest) {
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	 
	//2.连接服务器
	//open(方法，文件名，异步传输)
	oAjax.open('GET',url,true);

	//3.发送请求
	oAjax.send();

	//4.接收返回
	oAjax.onreadystatechange=function () {
		if (oAjax.readyState==4) {
			if (oAjax.status==200) {
				fnSucc(oAjax.responseText);
			}else{
				console.error('Request was unsuccessful':+oAjax.status);
			}
		}
	}
}
	