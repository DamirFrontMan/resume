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
		var tit = document.querySelectorAll(".titT");
		var ico = document.querySelectorAll('.ico');
		var f_ico = document.querySelectorAll('.f-ico');
		var foot = document.querySelector('.footer');

		if(document.body.classList.contains('active')){
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
        	document.getElementById('spn').style.background = 'black';
        	document.body.style.color = 'black';
        	document.body.classList.remove('active');
    		document.getElementById("blC").style.color = 'orange';
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
    		document.getElementById("blC").style.color = '#00afc9';
        	foot.classList.add('active');
    	}
	}

	function blackMobile() {
		var btn = document.querySelector(".blackStyle");
		var btnMob = document.querySelector(".content__button_black-theme");
		var tit = document.querySelectorAll(".titT");
		var foot = document.querySelector('.footer');
		var f_ico = document.querySelectorAll('.f-ico');
		var ico = document.querySelectorAll('.ico');
		var mob_white_border = document.querySelectorAll('.skilS');

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

    		for (var i = 0; i < mob_white_border.length; i++) {
    			mob_white_border[i].classList.remove('white-border');
    		}

    		document.getElementById("bl-theme").innerHTML="Темная тема";
			document.body.style.color = 'black';
			document.body.classList.remove('active');
			btn.classList.remove('active');
			btnMob.classList.remove('active');
			document.getElementById('spn').style.background = 'black';
			document.getElementById("blC").style.color = 'orange';
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

    		for (var i = 0; i < mob_white_border.length; i++) {
    			mob_white_border[i].classList.add('white-border');
    		}


    		document.getElementById("bl-theme").innerHTML="Светлая тема";
			document.body.style.color = 'white';
			document.body.classList.add('active');
			btn.classList.add('active');
			btnMob.classList.add('active');
			document.getElementById('spn').style.background = 'white';
			document.getElementById("blC").style.color = '#00afc9';
			foot.classList.add('active');
		}
	}

	function mobilskilS () {
		var mb_tab = document.querySelector('.skilS');
		if (mb_tab.classList.contains('mobile_tab')) {
			mb_tab.classList.remove('mobile_tab');
		}else {
			mb_tab.classList.add('mobile_tab');
		}

	}

	function mobilskilS_anim () {
		var mb_tab = document.querySelector('.skilS_anim');
		if (mb_tab.classList.contains('mobile_tab')) {
			mb_tab.classList.remove('mobile_tab');
		}else {
			mb_tab.classList.add('mobile_tab');
		}
	}

	document.getElementById("bl-theme").innerHTML="Темная тема";

	document.querySelector('.mySkills').addEventListener('click', mobilskilS);
	document.querySelector('.secS').addEventListener('click', mobilskilS_anim);
	document.querySelector(".content__button_black-theme").addEventListener("click", blackMobile);
	document.querySelector(".blackStyle").addEventListener("click", blackS);
	window.addEventListener('scroll', skrF);
	window.onload = animSld;
}

document.addEventListener("DOMContentLoaded", ready);