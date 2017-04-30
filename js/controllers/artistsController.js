angular.module('spotyApp')
	.controller('artistsController', function($scope, $rootScope, spotyService){
 		$scope.artistSelection = function() {
            var idArtist = $scope.artist_selected
            spotyService.artistSelection(idArtist)
            .then(function(response) {
            $rootScope.albums = response.data.items
            
            })           
        }
	})