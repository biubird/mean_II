var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
	question1: {
		question: String,
		correct: String,
		fake1: String,
		fake2: String
	},
	question2: {
		question: String,
		correct: String,
		fake1: String,
		fake2: String
	},
	question3: {
		question: String,
		correct: String,
		fake1: String,
		fake2: String
	},
	percentage: Number,
	name: String,
	score: String
});

module.exports = mongoose.model("Quiz", QuizSchema);
