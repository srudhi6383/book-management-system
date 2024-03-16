const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'your-secret-key';

const generateToken = (user) => {
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
      role: user.role,
    },
    TOKEN_SECRET,
    {
      expiresIn: '1h',
    }
  );
  return token;
};

const verifyToken = (token) => {
  try {
    if (!token) {
      throw new Error('Authentication failed! Token not provided.');
    }
    const decodedToken = jwt.verify(token, TOKEN_SECRET);
    const user = {
      userId: decodedToken.userId,
      email: decodedToken.email,
      role: decodedToken.role,
    };
    return user;
  } catch (error) {
    throw new Error(`Authentication failed! ${error.message}`);
  }
};

module.exports = {
  generateToken,
  verifyToken
};
