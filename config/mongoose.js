const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database Connected !!!");
});

module.exports= db;