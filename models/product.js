const { mongoConnect } = require('../util/database');

class Product {
	consturctor(title, price, description, imageUrl) {
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;
	}

	save() {}
}

module.exports = Product;
