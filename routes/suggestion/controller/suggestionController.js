const Suggestion = require("../model/Suggestion");

module.exports = {
	getAllSuggestion: (body, callback) => {
		Suggestion.find(body, function (err, foundSuggestion) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, foundSuggestion);
			}
		});
	},
	getSuggestionByID: (id, callback) => {
		Suggestion.findById(id, function (err, foundSuggestion) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, foundSuggestion);
			}
		});
	},
	createSuggestion: (body, callback) => {
		const createdSuggestion = new Suggestion({
			title: body.title.toLowerCase(),
			author: body.author.toLowerCase(),
			suggestion: body.suggestion.toLowerCase(),
			likes: body.likes,
			anonymous: body.anonymous,
		});

		createdSuggestion.save(function (err, savedSuggestion) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, savedSuggestion);
			}
		});
	},
	deleteSuggestion: (id, callback) => {
		Suggestion.findByIdAndDelete(id, function (err, deletedSuggestion) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, deletedSuggestion);
			}
		});
	},
};
