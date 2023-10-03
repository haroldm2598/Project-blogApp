const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// ===== USING PASSPORT JWT ONLY =====
exports.register = asyncHandler(async (req, res) => {
	try {
		const findUser = await User.findOne({ email: req.body.email });

		if (!findUser) {
			const salt = await bcrypt.genSalt(10);
			const hashPassword = await bcrypt.hash(req.body.password, salt);
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: hashPassword
			});

			await newUser.save();
			res.send({
				success: true,
				message: 'User is created',
				user: {
					id: newUser._id,
					name: newUser.name,
					email: newUser.email
				}
			});
		} else {
			res.send('user already created please try another');
		}
	} catch (err) {
		res.send({
			success: false,
			message: 'Something went wrong',
			error: err
		});
	}
});

exports.login = asyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;
		const findUser = await User.findOne({ email: email });
		const passwordCorrect = await bcrypt.compare(password, findUser.password);
		// wrong password
		if (!passwordCorrect) {
			return res.status(401).send({
				success: false,
				message: 'Incorrect email or password'
			});
		}

		const payload = {
			email: findUser.email,
			id: findUser._id
		};
		const token = jwt.sign(payload, 'sansa', { expiresIn: '1d' });

		return res.status(200).send({
			sucess: true,
			message: 'Logged in successfully',
			token: 'Bearer ' + token
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: 'Server Error'
		});
	}
});

exports.protected = (req, res) => {
	return res.status(200).send({
		success: true,
		user: {
			id: req.user._id,
			email: req.user.email
		}
	});
};

// NOT WORKING INSIDE CONTROLLER MUST BE IN ROUTER
// exports.protected = (passport.authenticate('jwt', { session: false }),
// 	(req, res) => {
// 		res.json({ msg: 'success' });
// 	});

// (exports.protected = passport.authenticate('jwt', { session: false })),
// 	(req, res) => {
// 		return res.status(200).send({
// 			success: true,
// 			user: {
// 				id: req.user._id,
// 				email: req.user.email
// 			}
// 		});
// 	};
