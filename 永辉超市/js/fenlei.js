$(function(){
   
    tiaozhuan();
})
function tiaozhuan(){
   
    $(".boxleft ul li").each(function(i){
        
        $(this).click(function(){
            $(".boxleft ul li").css({
                "background":"#f9f9f",
                "color":"#939393"
            });
            $(this).css({
                "background":"#f9f9f",
                "color":"red"
            });
            $(".baohan").css({
                "display":"none"
            });
            $(".baohan")[i].style.display="block";
        });
    });
}