var mongoose = require('mongoose')
var dbConfig = require('./dbConfig');
var connectDb = async () => {
    try {
        const conn = await mongoose.connect(dbConfig.database,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`mongodb connected:${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDb