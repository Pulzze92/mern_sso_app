import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sso');

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
