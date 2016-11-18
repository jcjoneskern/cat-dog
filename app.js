var app = angular.module("aniModule", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/cat", {
    templateUrl: "cat.html"
  });
  $routeProvider.when("/dog", {
    templateUrl: "dog.html"
  });
  $routeProvider.when("/catdog", {
    templateUrl: "catdog.html"
  });
  $routeProvider.when("/catanddog", {
    templateUrl: "catanddog.html"
  });
  $routeProvider.when("/", {
    template: "Welcome! Click an animal above"
  });
  $routeProvider.otherwise({
    template: "404 animals not found"
  });
});
