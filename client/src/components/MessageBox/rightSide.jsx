import React, { useState, useEffect } from 'react';
import Message from './Message';
import { Form, Button } from 'react-bootstrap';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../../store/action/messageAction';

let socket;

const LeftSide = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const messageStore = useSelector(store => store.messageRoot);

  const ENDPOINT = 'localhost:3001';
  useEffect( () => {
    socket = io(ENDPOINT);
  }, [ENDPOINT]);

  
  setTimeout(() => {
    dispatch(getMessages(sessionStorage.getItem('to')))
  }, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(socket)
    let from = messageStore.fromId;
    let to = messageStore.toId;
    console.log(to, from, message)
    socket.emit('sendMessage', { message, from, to });
    setMessage('');
    dispatch(getMessages(to))
    
  };  
  
  return (
    <div>
      { messageStore.isMessages ?
        <>
          <div style={{backgroundColor: 'blue', color: 'white', padding: '20px', width: "900px"}}>
            <h6 style={{fontWeight: '700'}}>
              { messageStore.username }  
              <span style={{fontWeight: '0px', fontSize: '14px', marginLeft: '10px'}}>{ messageStore.status } </span>
            </h6>
          </div>
          <div>
            
            <div style={{height: '50px'}}>
              <div style={{width: '95%', marginLeft: 'auto', marginRight: 'auto', }}>
                <Message messageList = {messageStore.messages} from={messageStore.fromId}/>
                <div>
                  <Form style={{display: "flex"}} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail" style={{width: "90%"}}>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Form.Group>
                    <Button style={{height: '40px', marginLeft: '20px'}} type="submit">
                      Send
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </> : 
        <div style={{textAlign: 'center'}}>
          No Messages Shown
        </div>
      }
    </div>
  )
};

export default LeftSide;