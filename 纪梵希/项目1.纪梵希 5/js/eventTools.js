//功能：阻止浏览器的默认行为的函数封装
//参数：
function preventDefault1804(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValue=false;
	}
}

//功能：给DOM元素绑定事件；
/*
domObj:DOM对象
eventType：事件类型(不包含 "on")
func:事件绑定函数
isCapture:是否捕获
*/
function addEvent(domObj,eventType,func,isCapture){
	if(isCapture==undefined){
		var isCapture = false;
	}
	if(domObj.addEventListener){
		domObj.addEventListener(eventType,func,isCapture);
	}else if(domObj.attachEvent){
		domObj.attachEvent("on"+eventType,func);
	}else{
		domObj["on"+eventType]=func;
	}
}