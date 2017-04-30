angular.module('spotyApp')
	.controller('searchController', function ($scope, $rootScope, spotyService){
	$scope.artistQuery = 'the beatles'

                    $scope.artistSearch = function(){
                      var query = $scope.artistQuery
                      console.log(query)
                            spotyService.searchArtist(query)
                            .then(function(response) {
                                $rootScope.artists = response.data.artists.items
                            })
                    }
                })