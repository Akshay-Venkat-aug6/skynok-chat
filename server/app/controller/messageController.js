const Message = require('../../model/Message');

const addMessage = async(message) => {
  try {
    const respopnse = await Message.create(message);
    console.log(response)
  } catch (error) {
    
  }
};

module.exports = {
  addMessage
}