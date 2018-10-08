

	 $(function(){
	    jiantou();
	    lunbochuxian();
	    dianjia();
	    chakan();
	    xinxin1();
     });


function jiantou(){ 
     $(".firstjian").css({
    		"display":"none"
     });
//   进行鼠标判断
    
     var ord=0; 
     
      $(".firstjianyou").click(function(){
     	  ord++;
     	  console.log(ord+"右加");
     	   if(ord==0){
		     	$(".firstjian").css({
		        		"display":"none"
		        });
		   }else if(ord>0&&ord<5){
		   	    $(".firstjian").css({
		        		"display":"block"
		        });
		   }
		//   	   右箭头进行判断 
           if(ord==4){
		     	$(".firstjianyou").css({
		        		"display":"none"
		        });
		   }else if(ord<4){
		   	    $(".firstjianyou").css({
		        		"display":"block"
		        });
		   }
		   
	  }) 
     $(".firstjian").click(function(){
     	  ord--;
     	  console.log(ord+"左减");
     	   if(ord==0){
		     	$(".firstjian").css({
		        		"display":"none"
		        });
		   }else if(ord>0&&ord<5){
		   	    $(".firstjian").css({
		        		"display":"block"
		        });
		   }
//   	   右箭头进行判断 
           if(ord==4){
		     	$(".firstjianyou").css({
		        		"display":"none"
		        });
		   }else if(ord<4){
		   	    $(".firstjianyou").css({
		        		"display":"block"
		        });
		   }
     })
  
   }
   
   
// 鼠标一放在上去,,,就能实行事件
    function shubiao(){
    	    $(".firstjian").css({
		        		"display":"none"
		    });
		    $(".firstjianyou").css({
		        		"display":"none"
		    });
    	$(".xqboxLeft").mouseenter(function(){
 		    $(".firstjian").css({
		        		"display":"block"
		    });
		    $(".firstjianyou").css({
		        		"display":"block"
		    });
		    jiantou();
		    
    	});
    	$(".xqboxLeft").mouseleave(function(){
    		$(".firstjian").css({
		        		"display":"none"
		    });
		    $(".firstjianyou").css({
		        		"display":"none"
		    });
		    
		    
    	});
    }
//点击箭头时候让轮播图出现,,,
    function lunbochuxian(){
//  	  $(".lunbotu").css({
//  	  	 "display":"none"
//  	  })
    	 $(".lunbo").click(function(){
    		 $(".lunbotu").slideToggle("slow");  
    		 $(this).css({
    		 	"transform": "rotateZ(180deg)"
    		 });
    	 })
    }

   function dianjia(){
    
    	 $(".jiaru").hover(function(){
    		 $(this).css({
    		 	"top":"10px"
    		 });
    	 },function(){
    	 	$(this).css({
    		 	"top":"20px"
    		 });
    	 })
    }
// 让查看造型往上移动
    function chakan(){
    	$(".Adom").hover(function(){
    		$(this).css({
    			
    			"top":"10px"
    		});
    	},function(){
    		$(this).css({
    			
    			"top":"20px"
    		});
    	});
    }
//划过心心状态,,,让它变颜色
  function xinxin1(){
//	$(".heixin").css({
//		"display":"none"
//	});

  	$(".zhuangxinxin").hover(function(){
  		    
    		$(".heixin").css({
    			"display":"block"
    		});
    			   			
    		
    	},function(){
    		$(".heixin").css({
    			"display":"none"
    		});
    		
    	   });
  }
