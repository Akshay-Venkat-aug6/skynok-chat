import React from 'react';

const Messages = ({messages, from}) => {
  console.log(messages.from)
  let isSentByCurrentUser = false;

  if(from  === messages.from) {
    console.log(messages.from)
    isSentByCurrentUser = true;
  }
  return (
    <>
      { isSentByCurrentUser ?
        <div style={{display: "flex", justifyContent: 'flex-end'}}>
          <div style={{backgroundColor:'black', marginTop: '20px', padding: '10px', borderRadius: '5px', color: 'white'}}>
            { messages.message }
          </div>
        </div> 
        :
        <div style={{marginRight: 'auto', display: "flex", justifyContent: 'flex-start'}}>
           <div style={{backgroundColor:'black', marginTop: '20px', padding: '10px', borderRadius: '5px', color: 'white'}}>
            { messages.message }
          </div>
        </div>
      }
    </>
  )
};

export default Messages;
