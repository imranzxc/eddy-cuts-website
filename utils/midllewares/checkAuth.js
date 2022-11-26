import jwt from 'jsonwebtoken';
import 'dotenv/config'

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded._id;
      next();
    } catch (e) {
      console.log(e)
      return res.status(403).json({
        error: 'Нет доступа',
      });
    }
  } else {
    return res.status(403).json({
      error: 'Нет доступа',
    });
  }
};
