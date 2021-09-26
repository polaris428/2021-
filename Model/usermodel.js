const { Schema } = require('mongoose')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB');
var db = mongoose.connection;

db.on('error', function() {
    console.log('Connection Failed!');
});

db.once('open', function() {
    console.log('Connected!');
});

const UserSchema = new Schema({
    username: String,
    password: String,
    schoo: String,

})

const User = mongoose.model("User", UserSchema);


module.exports = { User };