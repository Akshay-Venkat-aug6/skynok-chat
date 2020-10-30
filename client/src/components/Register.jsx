import React, { useState, useEffect } from 'react';
import EmailValidator from 'email-validator';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/action/userAction';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const userStore = useSelector( store => store.userRoot );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect( () => {
    console.log(userStore.isSucceed, userStore.message)
    if(userStore.isSucceed){
      return toast.success('Register SuccessFully !!!')
    }
    else if(!userStore.isSucceed && userStore.message){
      return toast.error(userStore.message)
    }
  }, [userStore.message])
  
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
      name: name,
      email: email,
      password: password
    };
    // console.log(userDetails)
    dispatch(register(userDetails))
  };

  return (
    <div className="cre-container">
      <div style={{padding: '10px'}}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">UserName</label><br/>
            <input type="text" className="text-box"
              onChange={ (e) => setName(e.target.value) }
            />
          </div>
          <br />
          <div>
            <label className="label">Email</label><br/>
            <input type="text" 
              className="text-box"
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
              Register
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

export default RegisterForm;