import React, { useEffect } from 'react';
// Child Component
import Header from '../components/header';
import Body from '../components/Body';
import { useDispatch } from 'react-redux';
import { userlist } from '../store/action/userAction';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userlist());
  }, []);

  return (
    <div>
      <Header />
      <Body />
    </div>
  )
};

export default HomePage;