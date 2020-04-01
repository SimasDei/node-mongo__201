const { MongoClient } = require('mongodb');

const formatedString = () => {
	const db = process.env.MONGO_URL.replace('<USER>', process.env.MONGO_USER)
		.replace('<PASSWORD>', process.env.MONGO_PASSWORD)
		.concat(`/${process.env.MONGO_DATABASE}`);
	return db;
};

let _db;

exports.mongoConnect = async () => {
	try {
		const { db } = await MongoClient.connect(formatedString());
		console.log('Connected to database 💥🎉');
		_db = db();
	} catch (error) {
		console.log(error);
	}
};

exports.getDatabase = () => {
	if (_db) return _db;
	throw 'No databse found';
};
