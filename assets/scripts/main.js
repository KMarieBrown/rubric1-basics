'use strict';

// Test for main JavaScript file.
console.log('This sentence is a test for my main JS file.');

// Welcome Alert.
window.alert("Welcome! Let's Celebrate Birthdays!");

// Add today's date to the page.
// var date = new Date();
// document.write('Today is ' + date);

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
