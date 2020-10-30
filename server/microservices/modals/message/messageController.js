const Message = require('@/model/Message');
const User = require('@/model/User');

const userMessage = async(req, res) => {
  const { userid } = req.params;
  const { _id, username, status } = req.user;
  const users = await User.findOne({_id: userid})
  const getMessage = await Message.find();
  var message=  [];
  getMessage.map((msg) => {
    if((msg.from.toString() === _id.toString()) && (msg.to.toString() === userid.toString())) {
      message.push(msg)
    }
    else if(( msg.from.toString() === userid.toString()) && (msg.to.toString() === _id.toString())) {
      message.push(msg)
    }
  });
  console.log(userid)
  // setTimeout(() => {
    return res.send({messages: message, to: userid, username: users.username, from: _id, status: users.status, isMessages: true})  
  // }, 500);
  
};

module.exports = {
  userMessage
}