var passwords = ['Bienvenue'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;
	
var interval = setInterval(function(){
		for(i = 0; i < counter; i++) {
			characters[i] = password.charAt(i);
		}
		for(i = counter; i < password.length; i++) {
			characters[i] = Math.random().toString(36).charAt(2);
		}
		$('.password').text(characters.join(''));
	}, 25);
	

function hack() {
	counter++;
	if(counter == password.length){
		$('.granted, .rerun').removeClass('hidden');
	}
}

$(window).on('keydown', hack);
//$('.password').on('click', hack);

setInterval(hack,300)


$(this).addClass('hidden');
$('.info p:last-child, .password').removeClass('hidden');

window.setTimeout('window.location="accueil.html"; ',4000);