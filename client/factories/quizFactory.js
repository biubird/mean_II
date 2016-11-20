App.factory('quizFactory', function($http){
    var factory = {};

    factory.show = function(callback){
        $http.get('/quizzes').success(function(data){
            factory.quizzes = data;
            callback(factory.quizzes);
        });
    };

    factory.createQuiz = function(newQuiz,callback){
        $http.post('/quizzes/create',newQuiz).success(function(data){
            factory.currentQuiz = data;
            callback(factory.currentQuiz);
        });
    };

    factory.showCurrentQuiz = function(callback){
        callback(factory.currentQuiz);
    };

    factory.scoreQuiz = function(newQuiz,callback){
        $http.post('/quizzes/score/'+factory.currentQuiz._id,newQuiz).success(function(data){
            callback();
        });
    }

    return factory;
});
