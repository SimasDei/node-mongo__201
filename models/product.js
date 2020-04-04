const { getDatabase } = require('../util/database');

class Product {
	constructor(title, price, description, imageUrl) {
		this.newProduct = { title, price, description, imageUrl };
	}

	static async fetchAll() {
		const db = getDatabase();
		const products = await db.collection('products').find().toArray();
		return products;
	}

	async save() {
		const db = getDatabase();
		return await db.collection('products').insertOne(this.newProduct);
	}
}

module.exports = Product;
