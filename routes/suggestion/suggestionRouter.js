var express = require("express");
var router = express.Router();
var suggestionController = require("./controller/suggestionController");

/* GET home page. */
router.get("/", function (req, res, next) {
	// res.json({ message: "suggestion page" });
	suggestionController.getAllSuggestion({}, function (err, foundSuggestion) {
		if (err) {
			res.status(500).json({
				message: "Something went wrong!",
				error: err.message,
			});
		} else {
			res.json({ message: "Success!", foundSuggestion });
		}
	});
});

router.get("/search-by-id/:id", function (req, res, next) {
	suggestionController.getSuggestionByID(
		req.params.id,
		function (err, foundSuggestion) {
			if (err) {
				res.status(500).json({
					message: "Something went wrong!",
					error: err.message,
				});
			} else {
				res.json({ message: "Success!", foundSuggestion });
			}
		}
	);
});

router.post("/create-suggestion", function (req, res, next) {
	// res.json({ message: "creation page" });
	suggestionController.createSuggestion(
		req.body,
		function (err, savedSuggestion) {
			if (err) {
				res.status(500).json({
					message: "Something went wrong!",
					error: err.message,
				});
			} else {
				res.json({ message: "success", savedSuggestion });
			}
		}
	);
});

router.delete("/delete-by-id/:id", function (req, res) {
	suggestionController.deleteSuggestion(
		req.params.id,
		function (err, deletedSuggestion) {
			if (err) {
				res.status(500).json({
					message: "Something went wrong!",
					error: err.message,
				});
			} else {
				res.json({ message: "success", deletedSuggestion });
			}
		}
	);
});

router.put("/update-by-id/:id", function (req,res){
    suggestionController.updateSuggestionByID(
        req.params.id,
        req.body,
        function(err, updatedSuggestion){
            if (err){
                res.status(500).json({
                    message:"something went wrong",
                    error: err.message
                })
            } else {
                res.json({message:"success", updatedSuggestion})
            }
        }
    )
})

module.exports = router;
