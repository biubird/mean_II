App.factory('questionFactory', function($http){
    var factory = {};

    factory.createQuestion = function(newQuestion,callback){
        $http.post('/questions/create',newQuestion).success(function(status){
            callback(status);
        });
    };

    factory.showQuestions = function(callback){
        $http.get('/questions/showQuestions').success(function(data){
            factory.questions = data;
            callback(factory.questions);
        });
    };

    return factory;
});
