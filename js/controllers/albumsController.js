angular.module('spotyApp')
	.controller('albumsController', function($scope, $rootScope, spotyService){
		$scope.albumSelection = function(){
                var idAlbum = $scope.album_selected
                console.log(idAlbum)
                  spotyService.albumSelection(idAlbum)
                    .then(function(response) {
                     $rootScope.tracks = response.data.items
                    })

        }
    })
