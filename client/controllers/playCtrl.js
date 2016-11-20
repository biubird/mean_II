App.controller('PlayController', function($scope, $location, userFactory, questionFactory, quizFactory){

    userFactory.showCurrentUser(function(data){
        $scope.currentUser = data;
        if(!data.name)
            $location.url('/');
    });

    quizFactory.showCurrentQuiz(function(data){
        $scope.currentQuiz = data;
    })

    questionFactory.createQuestion({
      question:"What element begins with the letter 'K' ?",
      correct:"Krypton",
      fake1:"Oxygen",
      fake2:"Helium"}, function(){});
    questionFactory.createQuestion({
      question:"What is the ballet term for a 360-degree turn on one foot?",
      correct:"Pirouette",
      fake1:"frappe",
      fake2:"tendu"}, function(){});
    questionFactory.createQuestion({
      question:"What Great Lake state has more shoreline than the entire U.S. Atlantic seaboard?",
      correct:"Michigan",
      fake1:"Wisconsin",
      fake2:"Pennsylvania"}, function(){});
    questionFactory.createQuestion({
      question:"What color is Absynth?",
      correct:"Green",
      fake1:"Blue",
      fake2:"Purple"}, function(){});
    questionFactory.createQuestion({
      question:"What country has more tractors per capita?",
      correct:"Iceland",
      fake1:"Canada",
      fake2:"Japan"}, function(){});
    questionFactory.createQuestion({
      question:"What explorer introduced pigs to North America?",
      correct:"Christopher Columbus",
      fake1:"Ponce de Leon",
      fake2:"Hernando de Soto"}, function(){});
    questionFactory.createQuestion({
      question:"What is the number of musicians a band must have to be considered a Big Band?",
      correct:"10",
      fake1:"15",
      fake2:"5"}, function(){});

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

            quizFactory.scoreQuiz({
              score:String(score)+"/3",percentage:percentage}, function(data){
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
