// get id of form card
var modal = document.getElementById('card');

// id of the button that triggers the card
var btn = document.getElementById('contact-btn');

// Get span that closes card
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the card
btn.onclick = function() {
	modal.style.display = 'block';
};

// When the user clicks on X, close card
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks outside the card, close the card
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
