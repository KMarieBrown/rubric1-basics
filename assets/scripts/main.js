'use strict';

// Test main JavaScript file with numerical variable and mathematical operator.
var a = 12;
var b = 30;
console.log('12 * 30 is equal to ' + a * b + '.');

// Welcome Alert.
window.alert("Welcome! Let's Celebrate Birthdays!");

// Prompts the question, "Is today your birthday" and adds response to index file.
function welcomeButton() {
	var txt;
	var birthdate = prompt('Is today your birthday? (Type "Yes" or "No")');
	if (birthdate === 'Yes') {
		txt = 'Happy Birthday to You!';
	} else if (birthdate === 'No') {
		txt = 'A Very Merry Unbirthday to You (yes, you)!';
	} else {
		txt = 'Enter "Yes" or "No" exactly as you see here. Please try again.';
	}
	document.getElementById('birthdayWishes').innerHTML = txt;
}
