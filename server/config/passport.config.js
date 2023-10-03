const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user.model');
const bcrypt = require('bcryptjs');

passport.use(
	new LocalStrategy(
		{ usernameField: 'email' },
		async (username, password, done) => {
			try {
				const user = await User.findOne({ email: username });
				const match = await bcrypt.compare(password, user.password);

				if (!user.email)
					return done(null, false, { message: 'Incorrect email' });
				if (!match) return done(null, false, { message: 'Incorrect password' });

				return done(null, user);
			} catch (err) {
				console.log(err);
			}
		}
	)
);

passport.serializeUser((user, cb) => {
	cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
	try {
		const user = await User.findById(id);
		const resultUser = {
			_id: user._id,
			username: user.email,
			name: user.name
		};
		cb(null, resultUser);
	} catch (err) {
		cb(err);
	}
});
