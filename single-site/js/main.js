/**
* Main AngularJS Web Application
**/
var app = angular.module('singleSiteApp', [
'ngRoute'//,'ui.bootstrap'
]);

/**
* Configure the Routes
**/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
  .when("/", {
    templateUrl: "partials/home.html", 
    controller: "PageCtrl"
  })
  // About
  .when("/about", {
    templateUrl: "partials/about.html", 
    controller: "PageCtrl"
  })
  // Services
  .when("/services", {
    templateUrl: "partials/services.html", 
    controller: "PageCtrl"
  })
  // Contact
  .when("/contact", {
    templateUrl: "partials/contact.html", 
    controller: "PageCtrl"
  })
  //Portfolio
  .when("/portfolio-1-col", {
    templateUrl: "partials/portfolio-1-col.html", 
    controller: "PageCtrl"
  })
  .when("/portfolio-2-col", {
    templateUrl: "partials/portfolio-2-col.html", 
    controller: "PageCtrl"
  })
  .when("/portfolio-3-col", {
    templateUrl: "partials/portfolio-3-col.html", 
    controller: "PageCtrl"
  })
  .when("/portfolio-4-col", {
    templateUrl: "partials/portfolio-4-col.html", 
    controller: "PageCtrl"
  })
  .when("/portfolio-item", {
    templateUrl: "partials/portfolio-item.html", 
    controller: "PageCtrl"
  })
  // Other pages
  .when("/full-width", {
    templateUrl: "partials/full-width.html", 
    controller: "PageCtrl"
  })
  .when("/sidebar", {
    templateUrl: "partials/sidebar.html", 
    controller: "PageCtrl"
  })
  .when("/faq", {
    templateUrl: "partials/faq.html", 
    controller: "PageCtrl"
  })
  .when("/404", {
    templateUrl: "partials/404.html", 
    controller: "PageCtrl"
  })
  // Pricing
  .when("/pricing", {
    templateUrl: "partials/pricing.html", 
    controller: "PageCtrl"
  })
  // else 404
  .otherwise({
    redirectTo: '/404'
  });
}]);

/**
* Controls all other Pages
**/

app.controller('PageCtrl', function ($scope, $location, $http){
  console.log('page controller reporting for duty');

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
  
});