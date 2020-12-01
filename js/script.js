function ready() {
	function animSld() {
		// alert(pageYOffset);
		var cls = document.querySelector(".content__about-me");
		var ctx = document.querySelector(".contacts");
		cls.classList.add("active");
		ctx.classList.add("active"); 
		// var sor = ctx.getBoundingClientRect();// Позиция блока относительно веррха экрана
	
	}

	function skrF(){
		var firstSkrillBlok = document.querySelector(".mySkills");
		var secSkrillBlok = document.querySelector(".secS");
		var secTwoBlk = document.querySelector(".skilS_anim");

		var posFirst = firstSkrillBlok.getBoundingClientRect();
		var posSec = secSkrillBlok.getBoundingClientRect();

		if (pageYOffset >= posFirst.top -200) {
			firstSkrillBlok.classList.add("active");
		}

		if (pageYOffset >= posSec.top -100) {
			secSkrillBlok.classList.add("active");
			secTwoBlk.classList.add("active");
		}
	}

	function blackS(){
		var btn = document.querySelector(".blackStyle");
		var btnMob = document.querySelector(".content__button_black-theme");
		var obj = document.querySelector(".conteiner");
		var tit = document.querySelectorAll(".titT");
		var ico = document.querySelectorAll('.ico');
		var f_ico = document.querySelectorAll('.f-ico');
		var foot = document.querySelector('.footer');

		if(obj.classList.contains('active')){
			for (var i = 0.; i < tit.length; i++) {
    			tit[i].classList.remove('active');
    		}

    		for (var i = 0; i < ico.length; i++) {
    			ico[i].classList.remove('active');
    		}

    		for (var i = 0; i < f_ico.length; i++) {
    			f_ico[i].classList.remove('active');
    		}

    		btnMob.classList.remove('active');
    		btn.title = 'Темная тема';
    		btn.classList.remove('active');
        	obj.classList.remove('active');
        	document.getElementById('spn').style.background = 'black';
        	document.body.style.color = 'black';
        	document.body.classList.remove('active');
    		document.getElementById("blC").style.color = 'black';
    		foot.classList.remove('active');
    	}else {
    		for (var i = 0.; i < tit.length; i++) {
    			tit[i].classList.add('active');
    		}

    		for (var i = 0; i < ico.length; i++) {
    			ico[i].classList.add('active');
    		}

    		for (var i = 0; i < f_ico.length; i++) {
    			f_ico[i].classList.add('active');
    		}

    		btnMob.classList.add('active');
    		btn.title = 'Светлая тема';
    		btn.classList.add('active');
    		document.getElementById('spn').style.background = 'white';
    		document.body.style.color = 'white';
    		document.body.classList.add('active');
    		document.getElementById("blC").style.color = 'white';
        	obj.classList.add('active');
        	foot.classList.add('active');
    	}
	}

	function blackMobile() {
		var btn = document.querySelector(".blackStyle");
		var btnMob = document.querySelector(".content__button_black-theme");
		var obj = document.querySelector(".conteiner");
		var tit = document.querySelectorAll(".titT");
		var foot = document.querySelector('.footer');
		var f_ico = document.querySelectorAll('.f-ico');
		var ico = document.querySelectorAll('.ico');

		if (btnMob.classList.contains('active')) {

			for (var i = 0; i < tit.length; i++) {
				tit[i].classList.remove('active');
			}

			for (var i = 0; i < ico.length; i++) {
    			ico[i].classList.remove('active');
    		}

			for (var i = 0; i < f_ico.length; i++) {
    			f_ico[i].classList.remove('active');
    		}

			document.body.style.color = 'black';
			document.body.classList.remove('active');
			btn.classList.remove('active');
			obj.classList.remove('active');
			btnMob.classList.remove('active');
			document.getElementById('spn').style.background = 'black';
			document.getElementById("blC").style.color = 'black';
			foot.classList.remove('active');
		}else {

			for (var i = 0; i < tit.length; i++) {
				tit[i].classList.add('active');
			}

			for (var i = 0; i < ico.length; i++) {
    			ico[i].classList.add('active');
    		}

			for (var i = 0; i < f_ico.length; i++) {
    			f_ico[i].classList.add('active');
    		}

			document.body.style.color = 'white';
			document.body.classList.add('active');
			btn.classList.add('active');
			obj.classList.add('active');
			btnMob.classList.add('active');
			document.getElementById('spn').style.background = 'white';
			document.getElementById("blC").style.color = '#00afc9';
			foot.classList.add('active');
		}
	}

	document.querySelector(".content__button_black-theme").addEventListener("click", blackMobile);
	document.querySelector(".blackStyle").addEventListener("click", blackS);
	window.addEventListener('scroll', skrF);
	window.onload = animSld;
}

document.addEventListener("DOMContentLoaded", ready);