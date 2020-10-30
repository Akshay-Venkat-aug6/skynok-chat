const { Login, Register, Userlist, Logout } = require('../../Api/api');

export const login = (payload) => {
  return async(dispatch) => {
    const { data } = await Login(payload);
    console.log(data.message, data.isSucceed)
    localStorage.setItem('token', data.token)
    sessionStorage.setItem('isLogged', true)
    dispatch({
      type: 'LOGIN',
      payload: {
        email: payload.email,
        message: data.message,
        isSucceed: data.isSucceed
      }
    })
  }
};

export const register = (payload) => {
  return async(dispatch) => {
    const { data } = await Register(payload);
    localStorage.setItem('token', data.token)
    sessionStorage.setItem('isLogged', true)
    dispatch({
      type: 'REGISTER',
      payload: {
        name: payload.name,
        email: payload.email,
        message: data.message,
        isSucceed: data.isSucceed
      }
    })
  }
};

export const userlist = () => {
  return async(dispatch) => {
    const { data } = await Userlist();
    console.log(data)
    dispatch({
      type: 'USER_LIST',
      payload: {
        list: data.response
      }
    })
  }
};

export const userlogout = () => {
  return async(dispatch) => {
    const { data } = await Logout();
    console.log(data)
    localStorage.setItem('token', null)
    sessionStorage.setItem('isLogged', false)
    dispatch({
      type: 'USER_LOGOUT',
      payload: {
        token: '',
        isSucceed: null
      }
    })
  }
}