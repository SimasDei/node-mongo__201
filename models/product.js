const { getDatabase } = require('../util/database');

class Product {
	consturctor(title, price, description, imageUrl) {
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;
	}

	async save() {
		const db = getDatabase();
		try {
			return await db.collection('products').insertOne(this);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = Product;
