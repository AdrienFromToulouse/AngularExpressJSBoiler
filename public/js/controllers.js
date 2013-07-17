(function() {
  "use strict";
  window.AppCtrl = function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  };

  window.MyCtrl1 = function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  };

  window.MyCtr2 = function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  };

}).call(this);
