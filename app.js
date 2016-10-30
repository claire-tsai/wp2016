<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery.mousewheel.min.js"></script>
//離開頁頂時才出現gotop按鈕
$(".gotop").fadeOut(0)
$(window).scroll(function(){
    if($(window).scrollTop()>=$(".p02").offset().top){
    $(".gotop").fadeIn()
    }else{
    $(".gotop").fadeOut()
    }
    })

//點擊goptop時回到頁頂
$(".gotop").click(function(){
    $("html,body").stop()
    $("html,body").animate({"scrollTop":"0"})
    n=1
    })
