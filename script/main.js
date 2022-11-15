$(document).ready(function(){
    $('.loading .loader').fadeOut(3000,function(){
        $('body').css('overflow', 'auto')
        $(window).scrollTop(0)
        $('.loading').fadeOut(1000,function(){
            $('loading').remove()
        })
    })
})

$('.icon').click(function(){
    $(window).scrollTop(0)
})

$(window).scroll(function(){
    if($(window).scrollTop() > 150){
        $('.icon').css('display', 'flex')
    }else{
        $('.icon').css('display', 'none')
    }
})

