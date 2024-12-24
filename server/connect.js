const mongoose = require('mongoose');
const URL = "mongodb+srv://alisbahhina:<db_password>@cluster0.iolfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDb() {

        return mongoose.connect(URL);

}

module.exports = connectDb;