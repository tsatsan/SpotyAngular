angular.module('spotyApp')
.factory('spotyService', function($http) {
                    
                    function artistSearch(query) {
                        var urlArtistSearch = 'https://api.spotify.com/v1/search?type=artist&query='+ query
                        return $http.get(urlArtistSearch)
                    }
                    function artistSelection(idArtist){
                      var urlAlbumsArtist = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums'
                      return $http.get(urlAlbumsArtist)
                    }
                    function albumSelection(idAlbum){
                      var urlAlbumSelected = 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks'
                      return $http.get(urlAlbumSelected)

                    } 

                    return {
                      searchArtist: artistSearch,
                      artistSelection: artistSelection,
                      albumSelection: albumSelection
                    }

                  })