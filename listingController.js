angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
    	if($scope.newCode &&  $scope.newName &&  $scope.newAddress){
		      $scope.listings.push({'code' : $scope.newCode, 'name' : $scope.newName, 'address' : $scope.newAddress, 'coordinates': {'latitude': $scope.newLatitude, 'longitude': $scope.newLongitude}});
		      $scope.listings.sort(function(a,b){
		      	return a.code - b.code;
		      });
		    $scope.error = '';
  		}
    	else{
    		$scope.error = 'Please include a Code, Name, and Address!';
    	}
    };
    $scope.deleteListing = function(listing) {
    	var index = $scope.listings.indexOf(listing);
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