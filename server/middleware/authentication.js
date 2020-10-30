const User = require('@/model/User');
const jwtdecode = require('jwt-decode');

module.exports = async(req, res, next) => {
  try {
    const token = req.headers['authorization'];
    const decodeToken = jwtdecode(token);
    // console.log(decodeToken)
    const checkUser = await User.findOne({_id: decodeToken.id});
    if(!checkUser){
      throw new Error('Token is Invalid!!!')
    }
    req.user = checkUser;
    next();
  } catch (error) {
    return res.json({message: error.message, isTokenVerified: false})
  }
}