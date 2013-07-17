(function() {

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
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  });

  angular.module('myApp').controller('MyCtrl2', function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  });

  angular.bootstrap(document, ["myapp"]);

}).call(this);
