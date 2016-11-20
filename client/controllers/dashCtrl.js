App.controller('DashController', function($scope, $location, quizFactory, questionFactory, userFactory){
  
    userFactory.showCurrentUser(function(data){
        $scope.currentUser = data;
        if(!data.name)
            $location.url('/');
    });

    quizFactory.show(function(data){
        $scope.quizzes = data;
    });

    questionFactory.createQuestion({question:"What element begins with the letter 'K' ?",correct:"Krypton",fake1:"Oxygen",fake2:"Helium"},function(){});
    questionFactory.createQuestion({question:"What is the ballet term for a 360-degree turn on one foot?",correct:"Pirouette",fake1:"frappe",fake2:"tendu"},function(){});
    questionFactory.createQuestion({question:"What Great Lake state has more shoreline than the entire U.S. Atlantic seaboard?",correct:"Michigan",fake1:"Wisconsin",fake2:"Pennsylvania"},function(){});
    questionFactory.createQuestion({question:"What color is Absynth?",correct:"Green",fake1:"Blue",fake2:"Purple"},function(){});
    questionFactory.createQuestion({question:"What country has more tractors per capita?",correct:"Iceland",fake1:"Canada",fake2:"Japan"},function(){});
    questionFactory.createQuestion({question:"What explorer introduced pigs to North America?",correct:"Christopher Columbus",fake1:"Ponce de Leon",fake2:"Hernando de Soto"},function(){});
    questionFactory.createQuestion({question:"What is the number of musicians a band must have to be considered a Big Band?",correct:"10",fake1:"15",fake2:"5"},function(){});

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
