'use strict';

/* App Module */

var blogApp = angular.module('blogApp', [ 'ngRoute', 'blogControllers',
		'blogServices', 'blogBusinessServices', 'blogDirectives' ]);
blogApp.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl : 'partials/main.html',
				controller : 'BlogCtrl'
			}).when('/blogPost/:id', {
				templateUrl : 'partials/blogPost.html',
				controller : 'BlogViewCtrl'
			}).when('/login', {
				templateUrl : 'partials/login.html',
				controller : 'LoginCtrl'
			}).when('/logOut', {
				templateUrl : 'partials/login.html',
				controller : 'LogoutCtrl'
			});
			$locationProvider.html5Mode(false).hashPrefix('!');
		} ]);

/*
 * var helloWorldApp = angular.module('helloWorldApp', [ 'ngRoute',
 * 'helloWorldControllers' ]);
 * 
 * helloWorldApp.config([ '$routeProvider', '$locationProvider',
 * 
 * function($routeProvider, $locationProvider) { $routeProvider.when('/', {
 * templateUrl : 'partials/main.html', controller : 'MainCtrl' }).when('/show', {
 * templateUrl : 'partials/show.html', controller : 'ShowCtrl'
 * }).when('/customer', { templateUrl : 'partials/customer.html', controller :
 * 'CustomerCtrl' }).when('/addCustomer', { templateUrl :
 * 'partials/newCustomer.html', controller : 'AddCustomerCtrl'
 * }).when('/addedCustomer/:customer/:city', { templateUrl :
 * 'partials/addedCustomer.html', controller : 'AddedCustomerCtrl' });
 * $locationProvider.html5Mode(false).hashPrefix('!'); } ]);
 */