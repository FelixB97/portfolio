"use strict";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

export function loadMailApp() {
    init("user_0u0tmnrcbXhVuxm60rDOs");
    console.log("mail app active!");
    // document.querySelector("#submit_email").addEventListener("click", sendTheMail);
    getFormImput();
};


let templateParams = {
    name: 'the man himself',
    message: 'this is a message',
    reply_email: 'randomemail.com'
};


function sendTheMail() {
    emailjs.send('service_jm3mgin','template_w1hu8ih', templateParams)
	.then(function(response) {
	   console.log('Email sent successfully', response.status, response.text);
       displaySuccessMessage();
	}, function(err) {
	   console.log('FAILED...', err);
	});
}

function getFormImput() {
    //update imput fields to templateParams
}

function displaySuccessMessage() {
    //do something
}