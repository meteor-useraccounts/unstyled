// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package

var Both = ['client', 'server'];
var Client = 'client';
var Server = 'server';


Package.describe({
	summary: "Accounts Templates unstyled.",
	version: "2.0.0",
	name: "useraccounts:unstyled",
	git: "https://github.com/meteor-useraccounts/unstyled.git",
});

Package.on_use(function(api, where) {
	api.versionsFrom("METEOR@1.0");

	api.use([
		"templating",
	], Client);

	api.use([
		"useraccounts:init@2.0.0",
	], Both);

	api.imply([
		"useraccounts:init",
	], Both);

	api.add_files([
		"src/full_page_ua_form.html",
		"src/ua.css",
		"src/ua_error.html",
		"src/ua_input.html",
		"src/ua_nav_button.html",
		"src/ua_oauth.html",
		"src/ua_pwd_form_btn.html",
		"src/ua_pwd_form.html",
		"src/ua_pwd_link.html",
		"src/ua_reCaptcha.html",
		"src/ua_result.html",
		"src/ua_sep.html",
		"src/ua_signin_link.html",
		"src/ua_signup_link.html",
		"src/ua_social.html",
		"src/ua_terms_link.html",
		"src/ua_title.html",
	], Client);
});
