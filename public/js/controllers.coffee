"use strict"

angular.module('myApp').controller 'AppCtrl', ($scope, $http) ->
  $http(
    method: "GET"
    url: "/api/name"
  ).success((data, status, headers, config) ->
    $scope.name = data.name
  ).error (data, status, headers, config) ->
    $scope.name = "Error!"

angular.module('myApp').controller 'MyCtrl1', ($scope, $http) ->
    $scope.view1 = "VIEW1"


angular.module('myApp').controller 'MyCtrl2', ($scope, $http) ->
    $scope.view2 = "VIEW2"