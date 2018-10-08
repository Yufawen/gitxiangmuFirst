//1、项目中有哪些类：轮播图
function Slider($box,width,height,imgs,btnSize,btnColor,btnHighColor, timeSpace){
	this.$box = $box;//轮播图所在容器
	this.width = width;
	this.height = height;
	this.imgs=imgs;//图片路径数组
	this.ord = 0;//轮播图当前的图片序号	
	this.timeSpace = timeSpace
	
	this.sliderTimer = null;
	this.btnSize = btnSize;//每个豆豆的尺寸
	this.btnColor = btnColor;//每个豆豆的原始颜色
	this.btnHighColor = btnHighColor;//每个豆豆的高亮颜色

	this.createUI();
	this.createEvent();
	this.changeImg();
}
	//创建UI
Slider.prototype.createUI = function(){
		this.$box.css({
			"position":"relative",
			"overflow":"hidden"
		});
		//1、创建所有的图片
		for(let i=0;i<this.imgs.length;i++){
			let $img = $("<img/>");
			$img.attr("src",this.imgs[i]);
			$img.css({
				"position":"absolute",
				"top":"0px",
				"z-index":"0",
				"left":-this.width,
//              "left":"0px", 
               
				"width":this.width,
				"height":this.height
			});
			this.$box.append($img);
		}		
		this.$box.children().first().css("left","0px");
		
		//2、创建豆豆
		//创建豆豆的容器
		let $ul = $("<ul></ul>");
		$ul.css({
			"list-style":"none",
			"position":"absolute",
			"right":"50%",
			"bottom":"300px",
			"z-index":2,
//			"position":"relative",
             "display":"flex",
             "flex-wrap":"wrap",
//           "transform":"rotate(180deg)",
             "width":"120px",
             "height":"90px"
             
			
		    
		});
		this.$box.append($ul);	
		
		for(let i=0;i<this.imgs.length-2;i++){
			let $li = $("<li></li>");
			$li.css({

//				"margin-top":"40px",
				"margin-left":"5px",
				width:this.btnSize,
				height:this.btnSize,
				backgroundColor:this.btnColor
			});
			
			$ul.append($li);
		}
		for(let f=this.imgs.length-2;f<this.imgs.length-1;f++){
			let $li = $("<li></li>");
			$li.css({

//				"margin-top":"10px",
				"margin-left":"50px",
				width:this.btnSize,
				height:this.btnSize,
				backgroundColor:this.btnColor
			});
			
			$ul.append($li);
		}
		for(let j=this.imgs.length-1;j<this.imgs.length;j++){
			let $li = $("<li></li>");
			$li.css({
                 "margin-top":"-45px",
				"margin-left":"5px",
				width:this.btnSize,
				height:this.btnSize,
				backgroundColor:this.btnColor
			});
			
			$ul.append($li);
		}
		
		$ul.children().first().css("backgroundColor",this.btnHighColor);
	}
	
Slider.prototype.createEvent=function(){
		let obj=this;//this是轮播图对象
		
		//2、鼠标进入box停止变换
//		this.$box.mouseover(function(){
//			obj.stopChange();
//		});
		//3、鼠标离开box继续变换
//		this.$box.mouseout(function(){
//			obj.changeImg();
//		});
		//4、鼠标点击li跳转到对应的图片
		let $li = this.$box.find("li");
		$li.click(function(){
			obj.goImg($(this).index());		
		});		
	}
		
	//1、变换图片（同时变换豆豆的颜色）
Slider.prototype.changeImg=function(){
	this.sliderTimer = setInterval(()=>{
		//1、改变数据
		let outOrd = this.ord;//记录出去的那张图片的序号
		this.ord++;
		
		//2、处理边界
		if(this.ord>this.imgs.length-1){
			this.ord=0;
		}	
		
		//3、改变外观
		//1）、显示指定的图片
		this.showImg(outOrd,this.ord);
		//2)、改变指定豆豆的颜色
		this.showLi(this.ord);
	},this.timeSpace);
}
	
	//把指定的图片(inOrd)显示出来(某张图片(outOrd)滑出，某张图片(inOrd)滑入)
//Slider.prototype.showImg=function(outOrd,inOrd){
//		//1、滑入滑出前的准备工作；
//		let $img =  this.$box.find("img");
//		$img.eq(inOrd).css("left",this.width);
//		
//		$img.eq(outOrd).animate({
//			"left":-1*this.width,
//			
//		},1000);
//		
//		$img.eq(inOrd).animate({
//			"left":0
//		},1000);
//	}

//新加入的思路
Slider.prototype.showImg=function(outOrd,inOrd){
	//1、淡入淡出前的准备工作；
	
	let $img =  this.$box.find("img");
	for(let i=0;i<$img.length;i++){
		$img.eq(i).css("zIndex",0);
	}
    

	$img.eq(outOrd).css("zIndex",2);

	$img.eq(inOrd).css("zIndex",1);
	
	//2、开始淡入淡出
    let opacity1 = 0;
	let directionOpacity = 1;	
	let myTimer = setInterval(()=>{
		//1、改变数据
		opacity1 = opacity1+directionOpacity*0.05;
		//2、处理边界
		
		if(opacity1>=1){
			opacity1=1;
			window.clearInterval(myTimer);
		}
		
		//3、改变外观
		$img.eq(inOrd).css("opacity",opacity1);

		$img.eq(outOrd).css("opacity",1-opacity1);

		
	},20);
   }



//把指定的li为红色
Slider.prototype.showLi=function(transOrd){
	let $li = this.$box.find("li");
	$li.eq(transOrd).css("backgroundColor",this.btnHighColor).siblings().css("backgroundColor",this.btnColor);	
}
		
//2、停止变换
Slider.prototype.stopChange=function(){
	window.clearInterval(this.sliderTimer);
}

//3、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){
	//1、停止定时器
	window.clearInterval(this.sliderTimer);
	let outOrd = this.ord;
	this.ord = transOrd;
	if(outOrd==this.ord){
		return;
	}
	//2、改变外观
	//1）、显示指定的图片
	this.showImg(outOrd,this.ord);	
	//2)、改变指定豆豆的颜色
	this.showLi(this.ord);	
}