angular.module('myApp').controller 'AppCtrl', ($scope, $http) ->
  $http(
    method: "GET"
    url: "/api/name"
  ).success((data, status, headers, config) ->
    $scope.name = data.name
  ).error (data, status, headers, config) ->
    $scope.name = "Error!"

angular.module('myApp').controller 'MyCtrl1', ($scope, $http) ->
  $http(
    method: "GET"
    url: "/api/name"
  ).success((data, status, headers, config) ->
    $scope.name = data.name
  ).error (data, status, headers, config) ->
    $scope.name = "Error!"

angular.module('myApp').controller 'MyCtr2', ($scope, $http) ->
  $http(
    method: "GET"
    url: "/api/name"
  ).success((data, status, headers, config) ->
    $scope.name = data.name
  ).error (data, status, headers, config) ->
    $scope.name = "Error!"