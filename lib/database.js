const mongoose = require('mongoose');

function connectDB() {
	console.log(da);
	console.log('Connecting to:', process.env.DB_URL);
	const DB_URL = process.env.DB_URL;

	// Database connection
	mongoose.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection Error!'));
	db.once('open', () => {
		console.log('Database successfully connected...');
	});
}

module.exports = connectDB;
