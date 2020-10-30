import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LeftSide from './MessageBox/leftSide';
import RightSide from './MessageBox/rightSide';

const Body = () => {
  const userStore = useSelector(store => store.userRoot);
  
  return (
    <div style={{width: '95%', marginLeft: 'auto', marginRight:'auto', marginTop: "20px"}}>
      <div style={{display: 'flex'}}>
        <div style={{width: '30%'}}>
          <LeftSide userlist = {userStore.list}/>
        </div>
        <div style={{marginLeft: '12px', width: "1000px"}}>
          <RightSide />
        </div>
      </div>
    </div>
  )
};

export default Body;