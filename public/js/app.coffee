"use strict"

angular.module("myApp", []).config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
  $routeProvider.when "/view1",
    templateUrl: "partial/1"
    controller: 'MyCtrl1'

  $routeProvider.when "/view2",
    templateUrl: "partial/2"
    controller: 'MyCtrl2'

  $routeProvider.otherwise redirectTo: "/view1"
  $locationProvider.html5Mode true
]