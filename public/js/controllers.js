(function() {
  var AppCtrl, MyCtrl1, MyCtrl2;

  AppCtrl = function($scope, $http) {
    return $http({
      method: "GET",
      url: "/api/name"
    }).success(function(data, status, headers, config) {
      return $scope.name = data.name;
    }).error(function(data, status, headers, config) {
      return $scope.name = "Error!";
    });
  };

  MyCtrl1 = function() {};

  MyCtrl2 = function() {};

  "use strict";

  MyCtrl1.$inject = [];

  MyCtrl2.$inject = [];

}).call(this);
