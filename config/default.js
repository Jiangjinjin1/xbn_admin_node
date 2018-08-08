'use strict';

const url = process.env.NODE_ENV === 'production'?`mongodb://${'xbn_user:xbn_user@'}localhost:27017/xbn_user`:
'mongodb://localhost:27017/xbn_user'

module.exports = {
	port: 8111,
	url,
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}