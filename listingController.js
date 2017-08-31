angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({'code' : $scope.newCode, 'name' : $scope.newName, 'address' : $scope.newAddress});
      
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.code = '';
      $scope.name = '';
      $scope.address = '';
      $scope.coordinatesLong = '';
      $scope.coordinatesLat = '';
      $scope.code = index.code;
      $scope.name = index.name;
      $scope.address = index.address;
      $scope.coordinatesLong = index.coordinates.longitude;
      $scope.coordinatesLat = index.coordinates.latitude;
    };
  }
]);