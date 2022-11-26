import express from 'express';
import fs from 'fs';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'
import { checkAuth } from './utils/index.js';
import Routes from "./routes/index.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('[√] Подключение к базе данных успешно!'))
  .catch((err) => console.log('[✖] Подключение к базе данных вызвало ошибку!', err));

const app = express();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use('/uploads', express.static('uploads'));

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.use(Routes)

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(`При запуске проекта произошла ошибка - \n\n [ ${err} ] \n`);
  }

  console.log('Серверная часть веб приложения успешно запущена!');
});
