import React, { useState } from 'react';
import images from '../../assets/images/transparent-images.png';
// Componnt
import LoginForm from '../Login';
import RegisterForm from '../Register';

const Layout = () => {
  const [ title, setTitle ] = useState('login');
  const [isLogin, setisLogin] = useState(true);
  const [isRegister, setisRegister] = useState(false);
  const chooseCredentials = (titles) => {
    setTitle(titles)
  };

  const returnForm = () => {
    if(title === 'login'){
      return <LoginForm />
    }
    else if(title === 'register'){
      return <RegisterForm />
    }
  };

  return (
    <div style={{display: 'flex'}}>
      <div className="col-6" style={{backgroundColor: 'pink'}}>
        <div style={{width: '500px',  margin: '0 auto'}}>
          <img src={images} className="cre-img" alt="Side-Nav Image"/>
        </div>
      </div>
      <div className="col-6" style={{backgroundColor:'black', color: 'white'}}>
        <div className="mt-5" style={{width: '90%', margin: '0 auto'}}>
          <div className="pt-3">
            <div>
              <h2>Chat With Friends !!!</h2>
              <span>Spend time with friends</span>
            </div>

            {/* Login And Signup Part */}
            <div style={{width: '60%'}} className="m-4">
              <div style={{display: 'flex'}}>
                <div className="ml-3" style={{cursor: 'pointer'}} onClick={ () => { chooseCredentials('login'); setisLogin(true); setisRegister(false); }}>
                  <h3>Login</h3>
                  { isLogin ? 
                    <hr style={{backgroundColor: 'white', margin: '0'}}/> : null
                  }
                </div>
                <div className="ml-4" style={{cursor: 'pointer'}} onClick={ () =>{ chooseCredentials('register'); setisLogin(false); setisRegister(true); }}>
                  <h3>Register</h3>
                  { isRegister ? 
                    <hr style={{backgroundColor: 'white', margin: '0'}}/> : null
                  }
                </div>
              </div>
              <div>
                { returnForm() }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Layout;