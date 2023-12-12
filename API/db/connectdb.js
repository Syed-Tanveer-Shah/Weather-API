// db/connectdb.js
import mongoose from 'mongoose';
 
const connectDB = async (databaseURL) => {
  try {
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'weather', // Specify the database name here
      // Other options you might need...
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connectDB;
