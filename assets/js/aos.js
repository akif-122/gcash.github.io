AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
// Global settings:
disable: false, 
startEvent: 'DOMContentLoaded', 
initClassName: 'aos-init', 
animatedClassName: 'aos-animate', 
useClassNames: false, 
disableMutationObserver: false, 
debounceDelay: 50, 
throttleDelay: 99,



offset: 50, 
delay: 0, 
duration: 1000, 
easing: 'ease', 
once: true, 
mirror: false, 
anchorPlacement: 'top-bottom', 

});
		var toggler = document.querySelector(".navbar-toggler");
		var togglerIconBar = document.querySelector(".bar");
		var togglerIconTime = document.querySelector(".time");

		togglerIconBar.addEventListener("click", function(){
			togglerIconBar.classList.add("d-none")
			togglerIconTime.classList.remove("d-none")
		})

		togglerIconTime.addEventListener("click", function(){
			togglerIconBar.classList.remove("d-none")
			togglerIconTime.classList.add("d-none")
		})
	</script>