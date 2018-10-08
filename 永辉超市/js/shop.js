$(".sc").click(function(){
	if(confirm("确认删除么？") == true){
		$(this).parents().parents().parents().parents().parents(".yyy").detach();	
		sum();
		
	}
//	加入我需要的东西  
    
})




//这里是价格的变化
$('.add').click(function(){
	var number = $(this).parents('.yyy').find('.num');
	var price = $(this).parents('.yyy').find('.xq3_1 span');
	number.html(parseInt(number.html())+1);
	sum();
})

$('.jian').click(function(){
	var number = $(this).parents('.yyy').find('.num');
	var price = $(this).parents('.yyy').find('.xq3_1 span');
	number.html(parseInt(number.html())-1);
	if(number.html()<=1){
		number.html(1)
	}
	sum();
})
//在这里是单选的意思
$('.fx').click(function(){
	if($('.bs:checked').length == $('.fx').length){
		$('.foot_check').prop('checked',true);
		//prop选中为true，没有选中为false
		//计算选中的数量，，，选中的个数
		sum();
	}else{
		$('.foot_check').prop('checked',false);
		sum();
	}
})
//在这里是全选的意思
$('.foot_check').click(function(){
	if($(this).is(':checked')){ 
		$(':checkbox').prop('checked',true);
		sum();
	}else{
		$(':checkbox').prop('checked',false);
		sum();
	}
})

function sum(){
	var total_num = 0;
	var total_price = 0;
	$('.fx').each(function(){
		if($(this).is(':checked')){
			var num = parseInt($(this).parents('.yyy').find('.num').html());
			var sum = parseFloat($(this).parents('.yyy').find('.xq3_1 span').html());
			//这里的html相当于js中的innerHTML
			total_num += num;
			total_price += sum*num;
			
		}
		$('.footq').html(total_num);
		$('.footqw').html((total_price).toFixed(2));
	})
}