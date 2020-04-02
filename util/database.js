const { MongoClient } = require('mongodb');

const formatedString = () => {
	const db = process.env.MONGO_URL.replace('<USER>', process.env.MONGO_USER)
		.replace('<PASSWORD>', process.env.MONGO_PASSWORD)
		.replace('<DATABASE>', process.env.MONGO_DATABASE);
	return db;
};

let _db;

exports.mongoConnect = async () => {
	try {
		const mongoConnect = await MongoClient.connect(formatedString(), { useUnifiedTopology: true });
		console.log('Connected to mongo 💥🎉');
		_db = mongoConnect.db();
	} catch (error) {
		console.log(error);
	}
};

exports.getDatabase = () => {
	if (_db) {
		console.log(`Connected to ${process.env.MONGO_DATABASE} database 👻`);
		return _db;
	}
	throw 'No databse found';
};
