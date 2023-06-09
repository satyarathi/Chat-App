import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    console.log(bearerToken)

    const  user  = await jwt.verify(bearerToken, process.env.JWT_SECRET_KEY);
    console.log("let",user.id)
    req.body.userId = user.id
   
    next();
  } catch (error) {
    console.log("error bhai error")
    next(error);
  }
};
