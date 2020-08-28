'use strict';

// Test main JavaScript file with numerical variable and mathematical operator.
var a = 12;
var b = 30;
console.log(a * b);

// Welcome Alert.
window.alert("Welcome! Let's Celebrate Birthdays!");

// Prompts the question, "Is today your birthday".
function welcomeButton() {
	var txt;
	var birthdate = prompt('Is today your birthday? (Type "Yes" or "No")');
	if (birthdate === 'Yes') {
		txt = 'Happy Birthday to You!';
	} else if (birthdate === 'No') {
		txt = 'A Very Merry Unbirthday to You (yes, you)!';
	} else {
		txt = 'You must enter either "Yes" or "No" exactly as you see it here.';
	}
	document.getElementById('birthdayWishes').innerHTML = txt;
}
