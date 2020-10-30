import { GetMessage } from '../../Api/api';

export const getMessages = (payload) => {
  return async(dispatch) => {
    // console.log(payload)
    const { data } = await GetMessage(payload);
    dispatch({
      type: 'GET_MESSAGE',
      payload: {
        messages: data.messages,
        fromId: data.from,
        toId: data.to,
        username: data.username,
        status: data.status
      }
    })
  }
}