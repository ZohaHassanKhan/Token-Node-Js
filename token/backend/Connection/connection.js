const mongoose = require('mongoose');
 
const connectDb = async () => {
    try {
        // MongoDB connection string
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log(`MongoDB connected: ${mongoose.connection.host}`);
    } catch (err) {
        console.log("ERROR!!!!");
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDb;

