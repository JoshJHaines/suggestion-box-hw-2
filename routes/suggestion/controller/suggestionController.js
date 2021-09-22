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
	}
};