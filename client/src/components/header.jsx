import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userlogout } from '../store/action/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async() => {
    dispatch(userlogout())
    history.push('signup')
  };

  return (
    <div style={{backgroundColor: 'blue', height: '70px', color: 'white'}}>
      <div style={{padding: '15px', display: 'flex'}}>
        <div >
          <h3>
            Chat
          </h3>
        </div>
        <button style={{marginLeft: 'auto', backgroundColor: "transparent", border: 'none',marginTop: 'auto', marginBottom: 'auto', cursor: 'pointer'}} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
};

export default Header;