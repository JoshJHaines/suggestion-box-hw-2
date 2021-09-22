const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(
	{
		title: {
			type: String,
            required: true,
            unique: true
		},
		author: {
			type: String,
		},
		suggestion: {
			type: String,
            required: true,
		},
        likes: {
            type: Number,
            default: 0
        },
        anonymous: {
            type: Boolean,
            required: true,
        }
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("suggestion", suggestionSchema);