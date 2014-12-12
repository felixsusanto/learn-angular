var F1services = angular.module('F1FeederApp.services',[]);

F1services.factory('ergastAPIservice',function($http){

  var ergastAPI = {};

  ergastAPI.getDrivers = function(){
    return $http({
      method: 'JSONP',
      url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
    });
  }

  return ergastAPI;
});