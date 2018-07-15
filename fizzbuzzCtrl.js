var app = angular.module('tacoCat');
app.controller('FizzBuzzCtrl', function($scope) {
      $scope.translate = function translate(value) {
        var ret = "";
        
        if (!value) return "";
        if (value % 3 === 0) ret += "Fizz";
        if (value % 5 === 0) ret += "Buzz";
              
        return ret || value;
      };
    }
  );