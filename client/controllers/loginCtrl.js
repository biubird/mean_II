App.controller('LoginController', function($scope, $location, userFactory){

  $scope.login = function(newUser){
    if(!$scope.newUser)
      alert("You must enter your name!")
   else {
    userFactory.create($scope.newUser)
    .then( function(){
      $scope.newUser = {};
      $location.path('/dashboard');
      })
    .catch( function(error){
      console.log(error)
      })
    };
  };
});
