var app = angular.module('tacoCat');
app.controller('PrimeNumCtrl', function ($scope, RedditFactory) {
	   $scope.savedText = RedditFactory.savedText;
	
	   //set max value
	   var CAP = 1000000000000;
	   
	   //get elements by ids
	   
	   //set max lengths and placeholder    
	   // input.setAttribute('maxlength', CAP.toString().length);
	   // input.setAttribute('placeholder', 'Enter a number less than ' + CAP);
	
	   //set empty array to hold factors returned for i
	   function getAllFactorsFor(remainder) {
		   var factors = [], i;
		   
		   //run the loop using modulus operator to get factorization
		   for (i = 2; i <= remainder; i++) {
			   while ((remainder % i) === 0) {
				   factors.push(i);
				   remainder /= i;
			   }
		   }
		   
		   //return your stuff in the array
		   return factors;
	   }
	
	   
	   $scope.findPrimes = function (event) {
		   var val = + $scope.input,
			   result;
		   
		   if (isNaN(val) || val > CAP) {
			   return;
		   }
		   
		   $scope.output = getAllFactorsFor(val).join(', ');
	   }
	});