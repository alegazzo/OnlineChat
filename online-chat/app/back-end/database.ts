import mongoose from 'mongoose';

export const connectToDB = async () => {

    mongoose.set('strictQuery',true);
    try {
        await mongoose.connect('mongodb+srv://daniportela96:1ma7799etDPVqaBT@main.c4takfx.mongodb.net/?retryWrites=true&w=majority');
          console.log('connected');
    } catch (error) {
        console.log(error)
    }
}

