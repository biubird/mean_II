App.controller('PlayController', function($scope, $location, userFactory, quizFactory){

    userFactory.showCurrentUser(function(data){
        $scope.currentUser = data;
        if(!data.name)
            $location.url('/');
    });

    quizFactory.showCurrentQuiz(function(data){
        $scope.currentQuiz = data;
    })

    $scope.submitQuiz = function(){
        if(!$scope.newQuiz || !$scope.newQuiz.one || !$scope.newQuiz.two || !$scope.newQuiz.three)
            alert("Please choose an answer for all 3 questions!")
        else{
            var score = 0;
            if($scope.newQuiz.one == "option2")
                score++;
            if($scope.newQuiz.two == "option3")
                score++;
            if($scope.newQuiz.three == "option1")
                score++;
            var percentage = +(((score/3)*100).toFixed(2));
            quizFactory.scoreQuiz({score:String(score)+"/3",percentage:percentage}, function(data){
                if(score<=1)
                    alert("Better Luck Nex Time! Your score was "+score+"/3 or "+percentage+"%");
                if(score==2)
                    alert("You did good! Your score was "+score+"/3 or "+percentage+"%");
                if(score==3)
                    alert("Awesome Job! Your score was "+score+"/3 or "+percentage+"%");
                $location.url('/dashboard');
            });
        };
    };

});
