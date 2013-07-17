(function() {
  "use strict";
  this.myApp = angular.module("myApp", []);

  this.myApp.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "partial/1",
        controller: MyCtrl1
      });
      $routeProvider.when("/view2", {
        templateUrl: "partial/2",
        controller: MyCtrl2
      });
      $routeProvider.otherwise({
        redirectTo: "/view1"
      });
      return $locationProvider.html5Mode(true);
    }
  ]);

}).call(this);
