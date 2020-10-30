import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'emotion';
import Messages from './Messages';

const ROOT_CSS = css({
  height: 350
});


const Message = (props) => {
  console.log(props.messageList)
  return (
    <ScrollToBottom className={ROOT_CSS}>
      { props.messageList.map( (messge) => (
        <Messages messages={messge} from={props.from}/>
      ))}
    </ScrollToBottom>
  )
};

export default Message