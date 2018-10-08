

$(function(){
    jiaYouXuanFu();
    huaguobiaoxiao();
   
   
});
// window.onload=function(){
//     ceisji();
// }
// function A(str){//#box .cls  p
// 	if(str.charAt(0)=="#"){
// 		return document.getElementById(str.substring(1));
// 	}else if(str.charAt(0)=="."){
// 		return document.getElementsByClassName(str.substring(1));
// 	}else{
// 		return document.getElementsByTagName(str);
// 	}
// }
function huaguobiaoxiao(){
	   
    $(".dian").mouseenter(function(){
    	
    	$(this).css({
    		transition:"all 0.6s",
    		transform: "scale(0.4)"		
    	});
    });      
}
// 头部滑动滚动出现消失


    

  

function jiaYouXuanFu(){
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
                
                
            
            }else if(isupdown=="up"){
                
             console.log("美女上");
             console.log(afterScrollTop+"after");
    
           
           
             
                 
             
                     
             
             
    
                                
            }
        });
    }