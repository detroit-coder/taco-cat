var app = angular.module('tacoCat');
app.factory('RedditFactory', function ($http) {
   var savedPosts = [];
   return {
       getPosts
   };

   function getPosts() {
       if(savedPosts.length) {
           return Promise.resolve(savedPosts);
       }

       var url = 'https://www.reddit.com/r/aww/.json';
       return $http.get(url).then(function (response) {
           savedPosts = response.data.data.children;
           return savedPosts;
       }).catch(function (err) {
           console.log(err);
       });
   }

});