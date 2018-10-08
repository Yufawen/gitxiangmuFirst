 $(function(){
       $(".headerzi3deng").css({
       	    "display":"block",           
		     "color":"black"
		   
       });  
       
       dengLuCreat();   
       bannerCreat();
       let imgs = ["img/lb1.jpg","img/lb 2.jpg","img/lb3.jpg","img/lb4.jpg"];
	   new Slider($("#box1"),"100%",675,imgs,40,"gray","black",1000);
	   nvnan();
	   zaoxingzitiLeft();
	   daoSanXunziTop();
	   tongYiziTop();
	   meitichaxun();
	   
	   jianTouDianJi();
	  jianTouDianJifirst();
//点击箭头跳转	  
	  jianTouDianJi2();
	  jianTouDianJifirst2();
	  jianTouDianJi3();
	  jianTouDianJifirst3();
// 顶部悬浮    

      
       jiaYouXuanFu();
       dianziyouxiang();
//     电子邮箱

//     最后固定
       zuihouguding();
	});

    

function dengLuCreat(){
        $(".headerzi3deng").hover(function(){
        	$(".denglu").css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        	
        },function(){
        	$(".denglu").css({
        		"display":"none",

        	});
        })
        
          $(".denglu").hover(function(){
          	$(this).css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        },function(){
        	$(this).css({
        		"display":"none",

        	});
        })
	} 


	
function bannerCreat(){
//创造划过显示div
        
 //1.风景部分的hover
        $(".bannerzi").hover(function(){
            
        	$(".caiDan1").css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        	
        },function(){
           
        	$(".caiDan1").css({
        		"display":"none",

        	});
        })
        
          $(".caiDan1").hover(function(){
          	$(this).css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        },function(){
        	$(this).css({
        		"display":"none",

        	});
        })
 //女人部分的hover
  $(".bannerzi1").hover(function(){
        	$(".caiDan2").css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        	
        },function(){
        	$(".caiDan2").css({
        		"display":"none",

        	});
        })
        
  $(".caiDan2").hover(function(){
          	$(this).css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        },function(){
        	$(this).css({
        		"display":"none",

        	});
        })
 //男人部分的hover
 $(".bannerzi2").hover(function(){
        	$(".caiDan3").css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        	
        },function(){
        	$(".caiDan3").css({
        		"display":"none",

        	});
        })
        
  $(".caiDan3").hover(function(){
          	$(this).css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        },function(){
        	$(this).css({
        		"display":"none",

        	});
        });

//品牌部分的hover
$(".bannerzi3").hover(function(){
        	$(".caiDan4").css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        	
        },function(){
        	$(".caiDan4").css({
        		"display":"none",

        	});
        })
        
  $(".caiDan4").hover(function(){
          	$(this).css({
        		"display":"block",
        		"display": "flex",
        		"flex-wrap": "wrap"
        	});
        },function(){
        	$(this).css({
        		"display":"none",

        	});
        });

}

    
//女士   男士 系列
function nvnan(){
	$(".XixOne1").css({
		"color": "black",
        "border": "1px solid black"
	})
	$(".XixOne1").hover(function(){
		$(this).css({
			"background":"gray",
			"opacity":"0.3",
			"color": "black",
            "border": "1px solid black"
		})
	},function(){
		$(this).css({
			"background":"#ebebeb",
			"opacity":"1",
			"color":"black",
			"border":"1px solid black"
		})
	})
    
    $(".nvshi").hover(function(){
		$(this).css({
			"color": "black",
            "border-bottom": "2px solid black"
		})
	},function(){
		$(this).css({
			"background":"#ebebeb",
			"color":"black",
			"border-bottom": "none"
		})
	})   
 }

//划过查看造型,让查看造型往上移动一部分top
function zaoxingzitiLeft(){
	$(".zaoxingziti").hover(function(){
		$(this).css({
			"top":"15px"
		
		})
	},function(){
		$(this).css({
			"top":"30px"		
		})
	});	
}
//划过寻找附近的门店,让附近 的门店往上移动一部分top
function daoSanXunziTop(){
	$(".daoSanXunzi").hover(function(){
		$(this).css({
			"top":"95px"		
		})
	},function(){
		$(this).css({
			"top":"105.5px"		
		})
	});	
}
//最后一部分huaguo让同意并继续往上移动
function tongYiziTop(){
	$(".zuihouTwo").css({
		"right":"50px",
	});
	$(".zuihouTwo").hover(function(){
		$(this).css({			
			"position":"absolute",
			"top":"25px"		
		})
	},function(){
		$(this).css({
			"position":"absolute",
			"top":"30px"		
		})
	});	
}
//媒体查询部分,点击按钮出现效果
function meitichaxun(){	
	
	$(".headerzi4").toggle(function(){
		$(".meiTiChuXin").animate({
			right:"0px"		
		},"slow")
		
		
		$(".body1").animate(
			{
		    background:"black",
		    opacity:"0.2",
			right:"400px"		
		},"slow"
		)
        
		
	},function(){
//		
		$(".meiTiChuXin").animate({
			right:"-400px"		
		},"slow")
		
		
		$(".body1").animate(
			{
			 background:"gray",
		     opacity:"1",
			 right:"0px"		
		},"slow"
		)
	});
	
	$(".body1").click(function(){
//		
		$(".meiTiChuXin").animate({
			right:"-400px"		
		},"slow")
		
		
		$(".body1").animate(
			{
			 background:"gray",
		     opacity:"1",
			 right:"0px"		
		},"slow"
		)
	});
	
 }

//在媒体查询部分点击箭头滑出相应的区域
function jianTouDianJi(){
	$(".img1").click(function(){
		$(".meitihuadao1").animate({
			right:"0px"
		},"slow");
	});
}
function jianTouDianJifirst(){
	$(".zjtimg1").click(function(){
		$(".meitihuadao1").animate({
			right:"-400px"
		},"slow");
	});
}
//第二部分  滑到
function jianTouDianJi2(){
	$(".img2").click(function(){
		$(".meitihuadao2").animate({
			right:"0px"
		},"slow");
	});
}
function jianTouDianJifirst2(){
	$(".zjtimg1").click(function(){
		$(".meitihuadao2").animate({
			right:"-400px"
		},"slow");
	});
}
//第三部分 滑到
function jianTouDianJi3(){
	$(".img3").click(function(){
		$(".meitihuadao3").animate({
			right:"0px"
		},"slow");
	});
}
function jianTouDianJifirst3(){
	$(".zjtimg1").click(function(){
		$(".meitihuadao3").animate({
			right:"-400px"
		},"slow");
	});
}

//,,,,进行判断scrtop,,,然后顶部和底部悬浮
function xuanfu(){
//	let scrollTop =  document.documentElement.scrollTop || document.body.scrollTop ;
	let winT=$(window).scrollTop();
	let winH=$(window).height();
	console.log(winT);
//	let winTxiao=$(window).scrollTop();
	let winHxiao=$(window).height()-335;
	   $(window).scroll(function(){
		    if(winT<=winH){
			$(".header").css({"position":"fixed",
				"z-index":100,
				background:"#ebebeb",
			});
			$(".banner").css({"position":"absolute",
			    "top":"94px",
				"z-index":100,
				background:"#ebebeb",
				"position":"fixed"
			});
		}
		
	});
	
}

function xuantui(){
	let winT=$(window).scrollTop();
	let winH=$(window).height()-335;
	console.log(winT);
     if(winT>=winH){
     	 alert("nihao");
					$(".header").animate({
						top:"-94px"
						
					});
			}
	
}


//再来一遍顶部悬浮命令,,,加油喻发文
function jiaYouXuanFu(){
//	var t = document.documentElement.scrollTop || document.body.scrollTop;
	
	
	    var beforeScrollTop=$(window).scrollTop();
	       
		  	$(window).scroll(function(){
		var afterScrollTop=$(window).scrollTop();
		
		    
		    updown = afterScrollTop - beforeScrollTop;
		    
	        if( updown === 0 ) return false;            
	        beforeScrollTop = afterScrollTop;
		var isupdown=updown>0?"down":"up";
		if(isupdown=="down"){
            console.log("帅哥下");
             console.log(beforeScrollTop+"befoddd");
            $(".bhHeaderBanner").css({

	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
            $(".bhHeaderBanner").slideUp("slow");
            $(".meiTiChuXin").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meitihuadao1").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meitihuadao2").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meitihuadao3").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    
//	 	    划过a显示，，，对应的区域
            $(".caiDan1").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    }); 
	 	    $(".caiDan2").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".caiDan3").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".caiDan4").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
             
            
		}else if(isupdown=="up"){
			
		 console.log("美女上");
		 console.log(afterScrollTop+"after");

             $(".bhHeaderBanner").css({
                "z-index":"4",
                "background":"#ebebeb",
	 	    	"position":"absolute",
	 	    	"display":"none",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meiTiChuXin").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meitihuadao1").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meitihuadao2").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    $(".meitihuadao3").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed"

	 	    });
	 	    //	 	    划过a显示，，，对应的区域
	 	    $(".caiDan1").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed",
	 	    	"top":"149px"

	 	    });
	 	    $(".caiDan2").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed",
	 	    	"top":"149px"

	 	    });
	 	    $(".caiDan3").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed",
	 	    	"top":"149px"

	 	    });
	 	    $(".caiDan4").css({
	 	    	"position":"absolute",
	 	    	"position":"fixed",
	 	    	"top":"149px"

	 	    });
            $(".bhHeaderBanner").slideDown("slow");

                       	 
		}
	});
}
//电子邮箱订阅
function dianziyouxiang(){
	$(".jingdu").css({"margin-top":"20px"});
	$(".youxiang").css({
			"border-bottom":"1px solid gray",
			"background":"#ebebeb"
	});
	$(".jingdu").toggle(function(){
		$(".jingdutiao").animate({
			width:"170px"
		},"slow")
	 },function(){
		$(".jingdutiao").animate({
			width:"170px"
		},"slow")
	 }	
	);
	$(".daoEr").click(function(){
		$(".jingdutiao").animate({
			width:"0px"
		},"slow")
	 }	
	);
	

// 动态让字体往上移动
//   $(".daoEr").css({
//   	"position":"relative"
//   });
      $(".daxiao").css({
		    "position":"absolute",
		    
		})
     $(".jingdu").toggle(function(){
     	
		$(".daxiao").animate({
		    top:"10px"
		},"slow")
	 },function(){
		$(".daxiao").animate({
			top:"10px"
		},"slow")
	 }	
	);
	$(".daoEr").click(function(){
		$(".daxiao").animate({
			top:"30px"
		},"slow")
	 }	
	);  
	
//	动态改变字体
   $(".jingdu").toggle(function(){
		$(".daxiao").animate({
			fontSize:"1.5em"
		},"slow")
	 },function(){
		$(".daxiao").animate({
			fontSize:"1.5em"
		},"slow")
	 }	
	);
	$(".daoEr").click(function(){
		$(".daxiao").animate({
			fontSize:"1em"
		},"slow")
	 }	
	);
}
//最后固定
function zuihouguding(){
	$(".zuihou").css({
//		"position":"absolute",
         "left":"0px",
         "bottom":"0px",
         "position":"fixed"
		
		 });
}
