import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);
  if (initialized) {
    console.log('Already connected to MongoDB');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'next-blog',
      useNewUrlParser: true, // You can keep this option as it's still valid
    });
    console.log('Connected to MongoDB');
    initialized = true;
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};
