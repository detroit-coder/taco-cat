var app = angular.module('tacoCat');
app.controller('palindromeController', function ($scope) {
   
   $scope.palicheck = function palidrome(word) {
       var newStr=word.replace(/[^A-Z0-9]/ig, "").toLowerCase();
       var revword = newStr.split('').reverse().join('');
       return revword == newStr;
   };
});