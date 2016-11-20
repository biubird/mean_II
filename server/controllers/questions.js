var random = require('mongoose-simple-random');
var Question = require('../models/question');


module.exports = {

	showQuestions: function(req,res){
        Question.findRandom({},{},{limit: 3}, function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    create: function(req,res){
        Question.findOne({question:req.body.question},function(err,data){
            if(err)
                console.log(err);
            else{
                if(data){
                    res.json(data);
                }
                else{
                    var question = new Question(req.body)
                    question.save(function(err){
                        if(err)
                            console.log(err);
                        else{
                            res.json(true);
                        };
                    });
                }
            }
        });
    }
}
