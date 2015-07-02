//获取实际样式
function getStyle (obj,attr) {
		return getComputedStyle(obj,false)?getComputedStyle(obj,false)[attr]:obj.currentStyle[attr];
	}

//任意值运动
function startMove (obj,attr,iTarget,fnEnd) {
	var timer;
	 	clearInterval(obj.timer);
	 	obj.timer=setInterval(function(){
 		var cur;
 		if (attr=='opacity') {
 			cur=parseFloat(getStyle (obj,attr))*100;
 		}else{
 			cur=parseInt(getStyle (obj,attr));
 		}
 		
 		var speed=(iTarget-cur)/6;
 		speed=speed>0?Math.ceil(speed):Math.floor(speed);

 		if (cur==iTarget) {
 			clearInterval(obj.timer);
 			if (fnEnd) {fnEnd();}
 		}else{
 			if (attr=='opacity') {
 				obj.style[attr]=(cur+speed)/100;
 			}else{
 			obj.style[attr]=cur+speed+'px';
 		}
 		}
 	},30)
 }

//选取class节点
function getByClass (oParent,sClass) {
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className==sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}


function perfectMove (obj,json,fnEnd) {
	var timer;
	 	clearInterval(obj.timer);
	 	obj.timer=setInterval(function(){
 		var bstop=true;
 		for(var attr in json){
 		var cur;
 		if (attr=='opacity') {
 			cur=parseFloat(getStyle (obj,attr))*100;
 		}else{
 			cur=parseInt(getStyle (obj,attr));
 		}
 		
 		var speed=(json[attr]-cur)/6;
 		speed=speed>0?Math.ceil(speed):Math.floor(speed);

 		if (cur!=json[attr]) {
 			bstop=false;
 		}

 		/*if (cur==json[attr]) {
 			clearInterval(obj.timer);
 			if (fnEnd) {fnEnd();}
 		}else{*/
 			if (attr=='opacity') {
 				obj.style[attr]=(cur+speed)/100;  
 			}else{
 			obj.style[attr]=cur+speed+'px';
 		} 
 		/*}*/
 		if (bstop) {
 			clearInterval(obj,timer);
 			if(fnEnd) fnEnd();
 		}
 	}
 	},30)
 }