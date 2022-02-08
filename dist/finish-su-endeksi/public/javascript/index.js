$( document ).ready(function() {
    
//yeşil : 4b8908
//mavi :  4a90e2
//mor : 9013fe
//turuncu : f5a623

tippy('.what-is-this', {
  content: "Haftalık olarak ölçülen Finish Su Endeksi’ndeki değişimler.",
});

$("a[href^='#']").click(function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("body, html").animate({ scrollTop: position } /* speed */ );
});

$('.open-menu').click(function(){
    $(this).css('display','none');
    $('.close-menu').css('display','block');
    $(".mobile-menu-overlay").fadeToggle();
    $('.site-header').addClass('site-header-open-menu');
});

$('.close-menu').click(function(){
    $(this).css('display','none');
    $('.open-menu').css('display','block');
    $(".mobile-menu-overlay").fadeToggle();
    $('.site-header').removeClass('site-header-open-menu');
});

    $(".menu-item span").click(function(){
        $('.menu-item').removeClass('active');
        $('.menu-item span').removeClass('active');
        $('.dot').removeClass('active');
        $('.answer-item').removeClass('active-answer');
        $(this).addClass('active');
        $(this).prev().addClass('active');


        var childNumber = $(this).parent().index() + 1;
        $('.answer-item:nth-child('+childNumber+')').addClass('active-answer');
        $('.menu-item span').css("background-color","");
        $('.dot').css("background-color","");
        switch(childNumber){
            case 1:
                $('.active').css('background-color','#4a90e2');
                $('.question-content').css('border','solid 2px #4a90e2');
                $('.answer-left span').css('color','#4a90e2');
                break;
            case 2:
                $('.active').css('background-color','#4b8908');
                $('.question-content').css('border','solid 2px #4a8807');
                $('.answer-left span').css('color','#4a8807');
                break;
            case 3:
                $('.active').css('background-color','#9013fe');
                $('.question-content').css('border','solid 2px #9013fe');
                $('.answer-left span').css('color','#9013fe');
                break;
            case 4:
                $('.active').css('background-color','#f5a623');
                $('.question-content').css('border','solid 2px #f5a623');
                $('.answer-left span').css('color','#f5a623');
                break;
            default:
                $('.active').css('background-color','#4a90e2');
                $('.question-content').css('border','solid 2px #4a90e2');
                $('.answer-left span').css('color','#4a90e2');
        }  
      });
      
    $(".tab").click(function(){
        $('.tab').removeClass('active-tab');
        $(this).addClass('active-tab');

        $('.graphic').removeClass('active-graphic');
        var  graphicName = $(this).data("name");
        $('.graphic-'+graphicName).addClass('active-graphic');
    });
      
});