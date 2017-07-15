$(document).ready(function(){
   $.fn.showprogress = function(id,progress){
        $('#'+id).find('.process').animate({
                'width': progress+'%'
            },2000);
            $({counter: 1}).animate(
                {counter : progress},
                {
                duration : 2000,
                step : function(){
                     $('#'+id).find('.process').text(Math.ceil(this.counter)+'%'); 
                }
                });
    }
   
   $('#skill_frontend').one('mouseover', function() {
       $.fn.showprogress('html_skill',90);
       $.fn.showprogress('css_skill',80);
       $.fn.showprogress('javascript_skill',75);
   });
    
    $('#skill_backend').one('mouseover', function() {
       $.fn.showprogress('dotnet_skill',80);
       $.fn.showprogress('java_skill',70);
       $.fn.showprogress('sql_skill',85);
   });
    
    $('#skill_design').one('mouseover', function() {
       $.fn.showprogress('illustrator_skill',80);
       $.fn.showprogress('photoshop_skill',70);
       $.fn.showprogress('corel_skill',75);
   });
   
    $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top -38
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
    
    
     $(document).scroll(function(){
       var position = $(this).scrollTop();
           if(position >500)
            {
                $('.quicktop').fadeIn(800);   
            }
            else {
               $('.quicktop').fadeOut(800); 
            }
        });

var topscroll = 260;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > topscroll) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
});
   
   $('#navicon').hover(function(){
        $('.nav').find('ul').slideDown(400);
    },function() {
        $('.nav').find('ul').slideUp(400);
    });
    
   
});

jQuery(document).ready(function(){
    var sliderSet = function() {
    if($(document).width()<1000)
        {
        var wdith = $(document).width();
        $('.slide img').animate({
            'width' : wdith
        },1);
        $('.slide').animate({
            'margin-left': 0
        },2000);
        }
        else if($(document).width()>1000)
        {
            $('.slide img').animate({
            'width' : 1000
            },10);
        }
    }
    sliderSet();
    $(window).resize(function(){
        sliderSet();
    });
    var sliderCount = 1;
    var slideShow = function() {
        sliderCount++;
        var imgWidth = $('.slide img').width();
        $('.slide').animate({
            'margin-left': '-='+imgWidth
        },400,function(){
            if(sliderCount==5)
            {
            sliderCount = 1;
            $('.slide').animate({
            'margin-left': '0px'
            },400);
            }
        });
    }

    var slidePrev = function() {
        if(sliderCount>1)
        {
        var imgWidth = $('.slide img').width();
        sliderCount--;
        var imgWidth = $('.slide img').width();
        $('.slide').animate({
            'margin-left': '+='+imgWidth
        },400);
        }
    }

    $('#slider_next').click(function(){
       slideShow();
    });
    $('#slider_previous').click(function(){
       slidePrev();
    });

    var interval;

    interval = setInterval(function(){
    slideShow();
    },4000);

    $('.slider').mouseenter(function(){
        clearInterval(interval);
    });
});
