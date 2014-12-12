var F1controllers = angular.module('F1FeederApp.controllers',[]);

F1controllers.controller('driversController', function($scope, ergastAPIservice){
  $scope.nameFilter = null;
  $scope.driversList = [];

  ergastAPIservice.getDrivers().success(function(response){
    $scope.driversList = response.MRData.StandingsTable.StandingsList[0].DriverStandings;
  });
});