$(document).ready(function()
{
    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();   
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) 
        {
          $('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
	});

	$(".tabs li a").click(function() {
		
		// Active state for tabs
		$(".tabs li a").removeClass("active");
		$(this).addClass("active");
		
		// Active state for Tabs Content
		$(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
		$(this.rel).fadeIn(500).addClass("tab_content_active");
		
	});	
  	var list = $('.js-dropdown-list');
  	var link = $('.js-link');
  	link.click(function(e) {
    	e.preventDefault();
    	list.slideToggle(200);
  	});
  	list.find('li').click(function() {
    var text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    link.html(text+icon);
    list.slideToggle(200);
  });
});