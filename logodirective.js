var app = angular.module('tacoCat');
app.directive('logo', function(){
  return {
    restrict: 'E',
    replace: false,
    template: '<img src="topbar.png">'
  }
});
app.directive('tacoCatGif', function(){
  return {
    restrict: 'E',
    replace: false,
    template: '<img src="https://vignette.wikia.nocookie.net/r2d/images/c/c4/Taco_Cat.gif/revision/latest?cb=20150522024654">'
  }
});