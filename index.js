const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
	console.log('Connected correctly to server');

	Dishes.create({
		name: 'Brocolli',
		description: 'nice',
	})
	.then((dish) => {
		console.log(dish);

		// find will find all the dishes because no query applied
		// exec ensures that it is executed
		return Dishes.findByIdAndUpdate(dish._id, {
			$set: { description: 'Updated test' }
		},{ new : true,
		}).exec();
	})
	.then((dish) => {
		console.log(dish);

		// since comments is of array type, we can push elements in it.
		dish.comments.push({
			rating: 5,
			comment: 'I am feeling fantastico',
			author: 'Picasso',
		});

		return dish.save();

	}).
	then((dish) => {
		console.log(dish);

		return Dishes.remove({});
	})
	.then(() => {
		return mongoose.connection.close();
	})
	.catch((err) => {
		console.log(err);
	});
});