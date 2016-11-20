var Quiz = require('../models/quiz');

module.exports = {

	show: function(req,res){
        Quiz.find({},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    create: function(req,res){
       	var quiz = new Quiz(req.body)
        quiz.save(function(err){
	        if(err)
	            console.log(err);
	        else{
	            Quiz.findOne({},function(err,data){
	                if(err)
	                    console.log(err);
	                else{
	                    res.json(data);
	                }
	            }).sort({_id:-1});
        	};
    	});
	},

	score: function(req,res){
		Quiz.update({_id:req.params.id}, {score:req.body.score,percentage:req.body.percentage}, {new:true}, function(err,data){
            if(err)
                console.log(err);
            else
            	res.json(data);
		});
	}


}
