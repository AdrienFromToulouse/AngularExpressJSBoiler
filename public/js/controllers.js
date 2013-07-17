(function() {
  "use strict";
  angular.module('myApp').controller('AppCtrl', function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  });

  angular.module('myApp').controller('MyCtrl1', function($scope, $http) {
    return $scope.view1 = "VIEW1";
  });

  angular.module('myApp').controller('MyCtrl2', function($scope, $http) {
    return $scope.view2 = "VIEW2";
  });

}).call(this);
