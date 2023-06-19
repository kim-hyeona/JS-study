/* 
  오늘의 날짜 표시
*/

import React from 'react';
import "../style/Header.css"

const Header = () => {
  return (
    <div className='Header'>
      <h3>오늘은 🤔</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;