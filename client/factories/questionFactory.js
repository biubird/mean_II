App.factory('questionFactory', function($http){
    var factory = {};

    factory.createQuestion = function(newQuestion){
        return $http.post('/questions/create', newQuestion)
    };

    factory.showQuestions = function(callback){
        $http.get('/questions/showQuestions').success(function(data){
            factory.questions = data;
            callback(factory.questions);
        });
    };

    return factory;
});
