const { MongoClient } = require('mongodb');

const formatedString = () => {
	const db = process.env.MONGO_URL.replace('<USER>', process.env.MONGO_USER).replace(
		'<PASSWORD>',
		process.env.MONGO_PASSWORD
	);
	return db;
};

const database = async callback => {
	try {
		const connection = await MongoClient.connect(formatedString());
		console.log('Connected to database 💥🎉');
		callback(connection);
	} catch (error) {
		console.log(error);
	}
};

module.exports = database;
