App.controller('DashController', function($scope, $location, quizFactory, questionFactory, userFactory){

    userFactory.showCurrentUser(function(data){
        $scope.currentUser = data;
        if(!data.name)
            $location.url('/');
    });

    quizFactory.show(function(data){
        $scope.quizzes = data;
    });

    $scope.newQuiz = function(){
        questionFactory.showQuestions(function(data){
            $scope.questions = data;
            $scope.newQuiz = {
                question1: $scope.questions[0],
                question2: $scope.questions[1],
                question3: $scope.questions[2],
                name: $scope.currentUser.name
            };
            quizFactory.createQuiz($scope.newQuiz, function(quiz){
                $location.url('/quizzes/'+quiz._id);
            });
        });
    };

    $scope.logout = function(){
        userFactory.logout(function(data){
            $scope.currentUser = data;
            $location.url('/');
        });
    };

});
