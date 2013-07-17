 
AppCtrl = ($scope, $http) ->
  $http(
    method: "GET"
    url: "/api/name"
  ).success((data, status, headers, config) ->
    $scope.name = data.name
  ).error (data, status, headers, config) ->
    $scope.name = "Error!"

MyCtrl1 = ->
MyCtrl2 = ->
"use strict"
MyCtrl1.$inject = []
MyCtrl2.$inject = []