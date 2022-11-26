import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config'
import UserModel from '../models/User.model.js';

export default {
  register: async (req, res) => {
    try {
      const { email, fullName, password } = req.body;

      const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_ROUNDS));
      const hash = await bcrypt.hash(password, salt);

      const doc = await UserModel.create({
        email: email,
        fullName: fullName,
        passwordHash: hash,
      });

      const user = await doc.save();

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.SECRET_JWT_EXPIRATION,
        },
      );

      const { passwordHash, ...userData } = user._doc;

      res.json({
        ...userData,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: 'Не удалось зарегистрироваться',
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email: email });

      if (!user) {
        return res.status(404).json({
          error: 'Пользователь не найден',
        });
      }

      const isValidPass = await bcrypt.compare(password, user._doc.passwordHash);

      if (!isValidPass) {
        return res.status(400).json({
          error: 'Неверный логин или пароль',
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.SECRET_JWT_EXPIRATION,
        },
      );

      const { passwordHash, ...userData } = user._doc;

      res.json({
        ...userData,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: 'Не удалось авторизоваться',
      });
    }
  },

  getMe: async (req, res) => {
    try {
      const user = await UserModel.findById(req.userId);

      if (!user) {
        return res.status(404).json({
          error: 'Пользователь не найден',
        });
      }

      const { passwordHash, ...userData } = user._doc;

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: 'Нет доступа',
      });
    }
  },
}
