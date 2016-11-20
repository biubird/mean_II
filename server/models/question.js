var mongoose = require('mongoose');
    Schema = mongoose.Schema;
var random = require('mongoose-simple-random');

var QuestionSchema = new Schema({
	question: String,
	correct: String,
	fake1: String,
	fake2: String
});
QuestionSchema.plugin(random)

module.exports = mongoose.model("Question", QuestionSchema);
