App.factory('userFactory', function($http){
  var factory = {};

  factory.create = function(newUser){
    return $http.post('/users', newUser)
    .then( function(serverResponse){
      CurrentUser = serverResponse.data;
      console.log(CurrentUser);
    })
  }
  factory.showCurrentUser = function(callback){
    callback(CurrentUser);
  }
  factory.logout = function(callback){
    CurrentUser = {};
    callback(CurrentUser);
  }
  return factory;
})
