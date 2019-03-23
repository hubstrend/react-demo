
// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.side-nav');

    
//     burger.addEventListener('click',()=> {
        
//         nav.classList.toggle('nav-active');

//         burger.classList.toggle('toggle');
   

//     });
// }

// navSlide();


$(document).ready(function() {
	$(document).on('click', function(e) {
		
		if ( $(e.target).closest('.container-nav').length > 0 ) {
			  $('body').toggleClass('no-scroll');
        $('.side-nav').toggleClass('open');
        $('.side-nav-container').toggleClass('visible');
		} else if ( $(e.target).closest('.side-nav-container').length === 0 && $('.side-nav-container').hasClass('visible') ) {
	 		  $('body').removeClass('no-scroll');
        $('.burger').removeClass("open");
        $('.side-nav-container').removeClass("visible");
		}
	});
});