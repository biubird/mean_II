var User = require('../controllers/users.js');
var Quiz = require('../controllers/quizzes.js');
var Question = require('../controllers/questions.js');


module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.post('/users', User.create);
  app.get('/users', User.show);
  app.get('/users/:id', User.showOne);

  app.get('/quizzes', Quiz.show);
  app.post('/quizzes/create', Quiz.create);
  app.post('/quizzes/score/:id', Quiz.score);

  app.post('/questions/create', Question.create);
  app.get('/questions/showQuestions', Question.showQuestions);
}
