import React, { useEffect } from 'react';
import { css } from 'emotion';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useDispatch } from 'react-redux';
import { getMessages } from '../../store/action/messageAction';

const ROOT_CSS = css({
  height: 400,
  width: 400
});

const LeftSide = (props) => {
  const dispatch = useDispatch();
  var isUser;
  
  if(props.userlist ===undefined){
    window.location.reload()
    isUser = false;
  }
  else{
    isUser = true
  }

  const clickUser =(userid) => {
    sessionStorage.setItem('to', userid)
    dispatch(getMessages(userid))
  };
  
  return (
    <div>
      <div style={{backgroundColor: 'blue', color: 'white', padding: '20px', width: "400px"}}>
        <h6>
          Friends List
        </h6>
      </div>
      <div>
        <ScrollToBottom className={ROOT_CSS}>
          { isUser ?
            props.userlist.map((list) => (
              <div style={{height: '50px', cursor: 'pointer'}} onClick={ () => clickUser(list._id)}>
                <div style={{padding: '10px', fontSize: "20px"}} >
                  {list.username}
                  <span style={{fontSize: "10px", marginLeft: '10px'}}>{list.status}</span>
                </div>
            </div>
            ))
            :
            null
          }
          
        </ScrollToBottom>
      </div>
    </div>
  )
};

export default LeftSide;