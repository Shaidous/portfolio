$(function(){
    $(".skill-per").each(function(){
        $this = $(this);
        var per = $(this).attr("per");
        $this.css("width", per + "%");
        $this.find(".value").text(per + "%").css("opacity", "1");
    });
});


$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
    e.preventDefault();
    
    var target = $(this).attr("href");
    
    $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1500, function() {
    location.hash = target;
    });
    
    return false;
    });
   });


   var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*
=====================скролл до якоря с навигации=====================
*/
$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
  e.preventDefault();
  
  var target = $(this).attr("href");
  
  $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1500, function() {
  location.hash = target;
  });
  
  return false;
  });
 });


 var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});
