const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
	console.log('Connected correctly to server');

	Dishes.create({
		name: 'Chicken',
		description: 'tasty',
	})
	.then((dish) => {
		console.log(dish);

		// find will find all the dishes because no query applied
		// exec ensures that it is executed
		return Dishes.find({}).exec();
	})
	.then((dishes) => {
		console.log(dishes);
		return Dishes.remove({});
	})
	.then(() => {
		return mongoose.connection.close();
	})
	.catch((err) => {
		console.log(err);
	});
});