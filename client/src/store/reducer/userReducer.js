const initialState = {
  email: '',
  name: '',
  isSucceed: null,
  message: '',
  list: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        ...state, 
        email: action.payload.email,
        message: action.payload.message,
        isSucceed: action.payload.isSucceed
      }
    case 'REGISTER':
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        message: action.payload.message,
        isSucceed: action.payload.isSucceed
      }
    case 'USER_LIST':
      console.log(action.payload)
      return {
        ...state,
        list: action.payload.list
      }
    default: 
      return state
  }
};

export default userReducer