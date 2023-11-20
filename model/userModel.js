import mongoose from 'mongoose';

// Define the schema for the user
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age:Number,
    
});


export default mongoose.model('User', userSchema);
