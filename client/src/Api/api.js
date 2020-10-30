import axios from 'axios';

let baseUrl = "http://localhost:3001/api";
axios.defaults.headers.common = {'authorization': localStorage.getItem('token')}

export const Register = async (userRegisterCredentials) => {
  return axios.post(`${baseUrl}/register`, userRegisterCredentials);
};

export const Login = async(userCrdentials) => {
  return axios.post(`${baseUrl}/login`, userCrdentials)
};

export const Userlist = async() => {
  return axios.get(`${baseUrl}/`)
}

export const GetMessage = async(payload) => {
  console.log(payload)
  return axios.get(`${baseUrl}/messages/${payload}`)
}

export const Logout = () => {
  return axios.post(`${baseUrl}/logout`)
}