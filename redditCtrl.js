var app = angular.module('tacoCat');
app.controller('redditController', function($scope, $timeout, redditFactory){
  // $scope.animal= "dog"; (scope add'l things to view)
  
   redditFactory.getPosts().then(function(data){
     console.log(data);
     $timeout($scope.posts = data);
   });
 
 
 });