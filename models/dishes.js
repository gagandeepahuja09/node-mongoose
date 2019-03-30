const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 1,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
}, {
	timestamps: true,	
});

const dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true,
	},
	// Every dish can have multiple documents
	comments: [	commentSchema	]
}, {
		// Will automatically, added created at and update as timestamp
		timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;