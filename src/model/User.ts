import mongoose from 'mongoose';
import { IUser } from '../types/index';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUser>('user', userSchema);
