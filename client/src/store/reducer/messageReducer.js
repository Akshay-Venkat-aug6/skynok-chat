const initialState = {
  toId: '',
  fromId: '',
  messages: [],
  isMessages: false,
  username: '',
  status: ''
};

const messageReducer = (state=initialState, action) => {
  switch(action.type){
    case 'GET_MESSAGE':
      console.log(action.payload)
      return {
        ...state,
        toId: action.payload.toId,
        fromId: action.payload.fromId,
        username: action.payload.username,
        status: action.payload.status,
        messages: action.payload.messages,
        isMessages: true
      }
    default: 
      return state
  }
};

export default messageReducer;