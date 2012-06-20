$(document).ready(function() {

  var duration = 1200; // Standard animation duration
  var quickDuration = 500; // Quick scroll duration
  var easing = 'easeInOutExpo'; // Animation easing
  var callback = function(){}; // Animation callback

  function checkUrl(autoScroll){
    if(autoScroll == "yes"){    
      var checkUrl = window.location.hash;
      if(checkUrl !== ""){
        var checkUrl = checkUrl.substr(1);
        var navHeight = $('.navigation-wrap').height();
        var destination = $("#"+"link-"+checkUrl).offset().top - navHeight; 
        $('body,html').stop().animate({ scrollTop: destination}, quickDuration, easing, callback);
      }
    }
  }

  function initiateFirstPage() {
    var browserHeight = $(window).height();
    var browserWidth = $(window).width();
    var navHeight = $('.navigation-wrap').height();

    $('#firstpage-wrap').css({
      "height": browserHeight-navHeight+"px",
      "width": browserWidth+"px",
      "margin-top": navHeight-40+"px"
    });
  }

  initiateFirstPage();

  $(window).resize(function(){
    initiateFirstPage();
  });

  $('.navigation a').stop().click(function () {
    var navHeight = $('.navigation-wrap').height();
    var getHref = $(this).attr("href").substr(1);
    var destination = $("#"+"link-"+getHref).offset().top-navHeight;

    $('body,html').stop().animate({ scrollTop: destination}, duration, easing, callback);
  });
  
  $('.previewlink').stop().click(function () {
    var loadObject = $(this).attr("href").substr(1);
    var previewDesc = $(this).attr("title");
      
    if(previewDesc !== ""){
      $('#lightbox').prepend('<p class="previewDesc">'+previewDesc+'</p>');
      $('#lightbox').prepend('<img src="'+loadObject+'" class="lightbox-img">');
    }
    else{
      $('#lightbox').prepend('<img src="'+loadObject+'" class="lightbox-img">');
    }
    
    $('#lightbox-overlay').fadeIn(500);
    $('#lightbox').fadeIn(500);
    
    return false;
  });
  
  function hideLightbox(){
    $('#lightbox-overlay').hide();
    $('#lightbox').hide();
    $('#lightbox img').remove();
    $('.previewDesc').remove();
  }
  
  $('#lightbox-overlay').stop().click(function () {
    hideLightbox();
    return false;
  });
  
  $(".preview-desc img").hover(function(){
	    $(this).fadeTo(100, 0.6);
	  },function(){
	    $(this).fadeTo(100, 1);
	});
  
	$('html').keydown(function(e){
    if(e.keyCode == 27){
      hideLightbox();
    }
	});

  checkUrl("no");

});