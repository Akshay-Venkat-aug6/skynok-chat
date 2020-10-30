const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('@/model/User');
const env = require('dotenv').config();

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({email: email});
  console.log(checkUser)
  if(!checkUser){
    return res.send({message: 'Email is not registered!!!', isSucceed: false})
  };
  // Check Password Verification
  const checkPasswod  = await bcrypt.compare(password, checkUser.password);
  if(!checkPasswod){
    return res.send({message: 'Password is Not Valid !!!', isSucceed: false})
  };
  console.log(checkPasswod)
  // Update Status
  return jwt.sign({id: checkUser._id}, process.env.PRIVATE_KEY, async (err, token)=>{
    const updateStatus = await User.update({_id: checkUser._id}, { $set : { status : 'online' } });
    res.send({message: "Login SuccessFully !!", isSucceed: true, token: token, response: checkUser})
  });
};

const userRegister = async (req, res) => {
  console.log(req.body)
  const { email, name, password } = req.body;
  const checkEmail = await User.findOne({email: email});
  if(checkEmail){
    return res.send({message: 'Email is Already Registered !!', isSucceed: false})
  }
  // Password Hashing
  var salt = await bcrypt.genSalt(10);
  var hashPassword = await bcrypt.hash(password, salt);
  
  let registerUser = {
    username: name,
    email: email,
    password: hashPassword,
    status: 'online'
  };
  const response = await User.create(registerUser);
  return jwt.sign({id: response._id}, process.env.PRIVATE_KEY, async (err, token)=>{
    // res.json({message: "Login Completed SuccssFully!!!", userid: checkEmail._id ,token: token, isLogined: true, role: role}).status(200) 
    res.send({response: response, isSucceed: true, token: token})
  });
  
};

const userStatus = async(req, res) => {
  // const { userid } = req.params;
  const { _id } = req.user;
  const checkUser = await User.findOne({_id: _id});
  if(!checkUser){
    return res.send({message: "Userid is InValid", isSucceed: false})
  };
  
  return res.send({userid: _id, status: checkUser.status, isSucceed: true})
};

const userList = async(req, res) => {
  const { _id } = req.user;
  console.log(_id)
  const userlist = await User.find({_id: {$ne: {  _id}}});
  return res.send({ message: "List are fetched SuccessFully!!!!", response: userlist})
  // console.log(userlist)
};

const userLogout = async(req, res) => {
  const { _id } = req.user;
  const updateStatus = await User.update({_id: _id}, { $set : { status : 'offline' } });
  return res.send({token: null, isSucceed: true})
};

module.exports = {
  userLogin,
  userRegister,
  userStatus,
  userList,
  userLogout
}