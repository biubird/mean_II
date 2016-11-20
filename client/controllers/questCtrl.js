App.controller('QuestionController', function($scope,$location,questionFactory,userFactory){

   $scope.createQuestion = function(callback){
        if(!$scope.newQuestion || !$scope.newQuestion.question || !$scope.newQuestion.correct || !$scope.newQuestion.fake1 || !$scope.newQuestion.fake2)
            alert("No fields can be empty!");
        else if($scope.newQuestion.length<15)
            alert("The question must be at least 15 characters long!");
        questionFactory.createQuestion($scope.newQuestion,function(status){
            if(status){
                alert("Question added successfully!");
                $location.url('/dashboard');
            }
            else
                alert("Your question could not be added, please try again!");
        });
   };

   $scope.logout = function(){
        userFactory.logout(function(data){
            $scope.currentUser = data;
            $location.url('/');
        });
    };

});
