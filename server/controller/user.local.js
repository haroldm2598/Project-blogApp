// ===== USING PASSPORT LOCAL ONLY =====

// exports.register = asyncHandler(async (req, res) => {
// try {
// 	const findUser = await User.findOne({ email: req.body.email });

// 	if (!findUser) {
// 		const salt = await bcrypt.genSalt(10);
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);
// 		const newUser = new User({
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: hashPassword
// 		});

// 		await newUser.save();
// 		res.send('new user created');
// 	} else {
// 		res.send('user already created please try another');
// 	}
// } catch (err) {
// 	console.log(err);
// }
// });

// exports.login = passport.authenticate('local', {
// 	successRedirect: 'protected'
// });

// exports.protected = (req, res) => {
// 	if (req.isAuthenticated()) {
// 		res.send('Protected');
// 	} else {
// 		res.status(401).json({ msg: 'unauthorized' });
// 	}
// 	console.log(req.session);
// 	console.log(req.user);
// };

// exports.logout = (req, res, next) => {
// 	if (req.user) {
// 		req.logout((err) => {
// 			if (err) next(err);
// 			res.json({ msg: 'user is logout' });
// 		});
// 	} else {
// 		res.json({ msg: 'No user to logout' });
// 	}
// };
