(function() {
  "use strict";
  this.myApp.controller('AppCtrl', function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  });

  this.myApp.controller('MyCtrl1', function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  });

  this.myApp.controller('MyCtr2', function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  });

}).call(this);
