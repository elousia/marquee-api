const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const ca = fs.readFileSync(path.resolve(__dirname, '..', 'marquee.crt'));
const da = `${__dirname}/marquee.crt`;
const va = path.join(process.cwd(), 'marquee.crt');

function connectDB() {
	console.log(da);
	console.log('Connecting to:', process.env.DB_URL);
	const DB_URL = process.env.DB_URL;

	// Database connection
	mongoose.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// ssl: true,
		// sslValidate: false,
		// checkServerIdentity: false,
		// // sslCA: `${__dirname}/marquee.crt`,
		// sslCA: fs.readFile(va, 'utf-8', function (err, data) {
		// 	return data;
		// }),
	});
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection Error!'));
	db.once('open', () => {
		console.log('Database successfully connected...');
	});
}

module.exports = connectDB;
