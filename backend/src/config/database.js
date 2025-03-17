const mongoose = require('mongoose');

function connectDB() {
    return mongoose.connect(process.env.dbURI)
}



module.exports = {connectDB};
