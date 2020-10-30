import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EmailValidator from 'email-validator';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/action/userAction';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userStore = useSelector( store => store.userRoot );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect( () => {
    console.log(userStore)
    if(userStore.isSucceed){
      toast.success('Login SuccessFully !!!');
      return setTimeout(() => {
        history.push('/')
      }, 1500)
      // return history.push('/')
    }
    else if(!userStore.isSucceed && userStore.message){
      return toast.error(userStore.message)
    }
  }, [userStore.isSucceed, userStore.message])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      return toast.error('Enter all Fields !!')
    };
    const check = EmailValidator.validate(email);
    if(!check){
      return toast.error('Email is Not validate !!!')
    };
  
    if(password.length <= 8){
      return toast.error('Password Should be greater than 8')
    };

    let userDetails = {
      email: email,
      password: password
    };
    dispatch(login(userDetails))
  };

  return (
    <div className="cre-container">
      <div style={{padding: '10px'}}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">Email</label><br/>
            <input type="text" className="text-box"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <br />
          <div>
            <label>Password</label><br/>
            <input type="password" 
              onChange = { (e) => setPassword(e.target.value) }
              className="text-box"
            />
          </div>
          <div style={{width: '350px', marginTop: '20px'}}>
            <Button variant="primary" size="lg" block type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
      />
    </div>
  )
};

export default LoginForm;