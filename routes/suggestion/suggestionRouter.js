var express = require("express");
var router = express.Router();
var suggestionController = require("./controller/suggestionController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({ message: "suggestion page" });
	// animalController.getAllAnimal({}, function (err, foundAnimal) {
	// 	if (err) {
	// 		res.status(500).json({
	// 			message: "Something went wrong!",
	// 			error: err.message,
	// 		});
	// 	} else {
	// 		res.json({ message: "Success!", foundAnimal });
	// 	}
	// });
});


module.exports = router;