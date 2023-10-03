const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

require('dotenv').config();

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

// ===== INIT APP =====
const app = express();
const port = process.env.PORT || 3000;

// ==== CONNECT TO MONGODB ====
mongoose
	.connect(process.env.MONGO_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((result) => {
		console.log('mongodb is connected');
		app.listen(port, () => {
			console.log(`post is listening to ${port}`);
		});
	})
	.catch((err) => console.log(err));

// ===== MIDDLEWARE =====
app.use(
	cors({
		origin: ['http://localhost:5173'],
		credentials: true
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use(passport.initialize());
require('./config/passport.jwt');

// ===== ROUTES =====
app.get('/', (req, res) => {
	res.send('Hello welcome to medium');
});

app.use('/users', userRoute);
app.use('/blog', blogRoute);

app.use((req, res) => {
	res.status(404).send('Page not found');
});

// if local only
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const { collection } = require('./model/user.model');

// if only using local Strategy
// app.use(
// 	session({
// 		secret: 'sansa',
// 		resave: false,
// 		saveUninitialized: true,
// 		store: MongoStore.create({
// 			mongoUrl: process.env.MONGO_CONNECT,
// 			collection: 'sessions'
// 		}),
// 		cookie: { maxAge: 1000 * 60 * 60 * 24 }
// 	})
// );
// require('./config/passport.config');
// app.use(passport.session());
