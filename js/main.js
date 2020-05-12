
    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// $(window).scroll(function() {
//           if($(document).scrollTop() > 50){            
//             $('.nav-top').hide();
            

//           } else {
//             $('.nav-top').show();
//           }
//         });

var zero = 0;
$(document).ready(function(){
	$(window).on('scroll', function(){
		$('.nav-top').toggleClass('hide', $(window).scrollTop() > zero);
		// zero = $(window).scrollTop();
	})
})

var yow = 0;

$(document).ready(function(){
	$(window).on('scroll', function(){
		$('.fixed-top').toggleClass('hide', $(window).scrollTop() > yow);
		yow = $(window).scrollTop();
	})
})


// window.replainSettings = { id: '1a5e2741-3221-4705-add4-21040f38f0e0' };
// (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
// var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
// })('https://widget.replain.cc/dist/client.js');
            


