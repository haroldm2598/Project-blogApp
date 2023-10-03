const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/user.model');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'sansa';

passport.use(
	new JwtStrategy(opts, (jwt_payload, done) => {
		// try {
		// 	const testUser = await User.findById(jwt_payload.id);
		// 	if (testUser) {
		// 		done(null, testUser);
		// 	} else {
		// 		done(null, false);
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }

		User.findById(jwt_payload.id)
			.then((user) => {
				// ORIGINAL RETURN
				// if (user) {
				// 	return done(null, user);
				// }

				// CUSTOM RETURN
				if (user) {
					const testUser = { user, jwtFromRequest: opts.jwtFromRequest };
					console.log(testUser.jwtFromRequest === opts.jwtFromRequest);
					return done(null, user);
				}
				return done(null, false);
			})
			.catch((error) => console.log(error));
	})
);
