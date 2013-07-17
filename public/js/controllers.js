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

}).call(this);
