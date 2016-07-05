'use strict';

/**
 * @ngdoc function
 * @name capcoVideoApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the capcoVideoApp
 */
angular.module('capcoVideoApp')
  .controller('VideoCtrl', function ($scope, $videoService, $sce) {

  	$scope.init=function(){
    	$scope.video = $videoService.getVideo();
  	}

  $scope.trustUrl =function(url){
    return $sce.trustAsResourceUrl(url);
  }

  	$scope.init();

  }).service('$videoService', function(){
    var currentVideo = {};
    
    var setVideo = function(video){
      currentVideo = video;
    }

    var getVideo = function(){
      return currentVideo;
    }

    return {
      setVideo: setVideo,
      getVideo: getVideo
    };

  });
