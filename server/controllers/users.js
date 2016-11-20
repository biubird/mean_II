var User = require('../models/user');

module.exports = {

	show: function(req,res){
        User.find({},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    showOne: function(req,res){
        User.findOne({_id:req.params.id},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    create: function(req,res){
        User.findOne({name:req.body.name},function(err,data){
            if(err)
                console.log(err);
            else{
                if(data){
                    res.json(data);
                }
                else{
                    var user = new User(req.body)
                    user.save(function(err){
                        if(err)
                            console.log(err);
                        else{
                            User.findOne({},function(err,data){
                                if(err)
                                    console.log(err);
                                else{
                                    res.json(data);
                                }
                            }).sort({_id:-1});
                        };
                    });
                }
            }
        });
    },



}
