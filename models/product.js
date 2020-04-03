const { getDatabase } = require('../util/database');

class Product {
	consturctor(title, price, description, imageUrl) {
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;

		this.save().bind(this);
	}

	async save() {
		const db = getDatabase();
		console.log(this);
		try {
			return await db.collection('products').insertOne(this);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = Product;
