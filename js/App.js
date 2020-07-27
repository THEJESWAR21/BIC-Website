function scrollAppear(){
	var introText = document.querySelector('.intro-text');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight;

	if(introPosition < screenPosition){
		introText.classList.add('intro-appaer');
	}
}

 window.addEventListener('scroll',scrollAppear);