$(function(){
	shanchu();
	spanjia();
	spanjian();
	quanxuan();
	danxuan();
});


function shanchu(){
	$(".shan").click(function(){
//		在这里会弹出确定,,,,,
         if(confirm("亲！删除吗？")==true){
         	$(this).parents(".shoopGouWu").remove();
         	zongqian();
         }
	});
}

//点击-号按钮
function spanjia(){
	$(".jian").click(function(){
		let num=$(this).next(".num");//prev是你点击的当前事件他哥，随时获取点击后
//      next是他弟弟
//		当前的数量
		num.html(parseInt(num.html())-1);
		if(num.html()<=1){
		num.html(1);
	}
//		顺便点击减号的时候让它价格发生变化*****这是总价的全局变量，随时获取点击后当前的总价格
        let zongtotal=$(this).parents(".shoopGouWu").find(".numjiage");	
//      当前单价
        let priceNum=$(this).parents(".shoopGouWu").find(".jiagebiaozhun p");
        
//      保留三位小数,计算此时的总价
        zongtotal.html((parseInt(num.html()) * parseFloat(priceNum.html())).toFixed(3));
        zongqian();
	});
}

//点击+号按钮
function spanjian(){
	$(".add").click(function(){
		
		let num=$(this).prev(".num");//prev是你点击的当前事件他哥，随时获取点击后
//		当前的数量
		num.html(parseInt(num.html())+1);
		if(num.html()>=20){
	
		num.html(20);	
	   }
//		顺便点击加号的时候让它价格发生变化*****这是总价的全局变量，随时获取点击后当前的总价格
        let zongtotal=$(this).parents(".shoopGouWu").find(".numjiage");	
//      当前单价
        let priceNum=$(this).parents(".shoopGouWu").find(".jiagebiaozhun p");
        
//      保留三位小数,计算此时的总价
        zongtotal.html((parseInt(num.html()) * parseFloat(priceNum.html())).toFixed(3));
        zongqian();
	});
}

//点击全选按钮,,,所要的效果
 function quanxuan(){
  	  $(".quancheck").click(function(){
  	  	if(this.checked){
  	  		$(":checkbox").prop("checked",true);//让他全选	
  	  		zongqian();
  	  	}else{
  	  		$(":checkbox").prop("checked",false);
  	  		zongqian();
  	  	}
  	  });
  }
// 点击单选按钮 
function danxuan(){
	$(".check").click(function(){
		if($(".check:checked").length == $(".check").length){

		// 全选的状态设置为ture
		
         $(".quancheck").attr("checked",true);
		// 每点击一次  数量的值，和总价的值
		zongqian();
       
		
		}else{
  	  		$(".quancheck").attr("checked",false);
  	  		zongqian();
  	  	}
	});
}
//结算总钱部分的所有总价格
function zongqian(){
	 let totlnum=0;
	 let countnum=0;
//	 在这里进行循环所有的商品
	$(".check").each(function(){
		if($(this).is(":checked")){
//			找到此时商品的数量
         let ciNum= parseInt($(this).parents('.shoopGouWu').find('.num').html());
//          找到此时商品的价格
         let ciPrice=parseInt($(this).parents('.shoopGouWu').find('.numjiage').html());
         totlnum=totlnum+ciPrice;
         countnum=countnum+ciNum;       
		}
	});
	$(".number").html(countnum);
	$(".zongqian").html(totlnum);
}
