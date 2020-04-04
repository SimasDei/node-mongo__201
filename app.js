require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { mongoConnect } = require('./util/database');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(process.env.DEV_PORT, () => {
	console.log(`App running on http://localhost:${process.env.DEV_PORT} ⛵️o/`);
	mongoConnect();
});
