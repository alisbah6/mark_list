const mongoose = require('mongoose');
const URL = "mongodb+srv://alisbahhina:A4G7EoN3Dwj1oRne@cluster0.iolfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDb() {

        return mongoose.connect(URL);

}

module.exports = connectDb;