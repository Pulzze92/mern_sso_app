import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({
      username,
      password,
    });

    res.status(201).json({
      message: 'Пользователь успешно зарегистрирован',
      user: { username },
    });
  } catch (err: unknown) {
    const error = err as Error;
    res.status(500).json({
      message: 'Ошибка регистрации',
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).select('+password');

    if (!user) {
      res.status(404).json({
        message: 'Неверный логин или пароль',
      });
      return;
    }

    if (user.password !== password) {
      res.status(401).json({
        message: 'Неверный логин или пароль',
      });
      return;
    }

    res.status(200).json({
      message: 'Успешный вход',
      user: { username },
    });
  } catch (err: unknown) {
    const error = err as Error;
    res.status(500).json({
      message: 'Ошибка входа',
      error: error.message,
    });
  }
};
