import mongoose from 'mongoose';

// Доступ в админ панель
// admin@barber.ru
// eddycuts95

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
