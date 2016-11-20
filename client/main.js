var App = angular.module('TriviaModule', ['ngRoute']);

//var USER = prompt('Please login!');

App.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_login.html',
    controller: 'LoginController'
  })
  .when('/dashboard', {
    templateUrl: '/partials/_dashboard.html',
    controller: 'DashController'
  })
  .when('/create', {
    templateUrl: '/partials/_newQuestion.html',
    controller: 'QuestionController'
  })
  .when('/quizzes/:id', {
    templateUrl: 'partials/_play.html',
    controller: 'PlayController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
