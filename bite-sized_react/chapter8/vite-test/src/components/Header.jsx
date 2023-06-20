/* 
  오늘의 날짜 표시
*/

/* 
  Header 컴포넌트의 리렌더 방지하기
  
  Header 컴포넌트는 부모 컴포넌트 App에서 아무런 props도 받지 않는다
  오늘 날짜만 표시하는 아주 간단한 기능을 할 뿐 어떤 상황에서도 리렌더할 필요가 없다
  따라서 이 컴포넌트가 어떤 변경으로 리렌더 된다면 이는 불필요한 렌더링이다
  그러나 부모 컴포넌트인 App 컴포넌트가 리렌더되면서 자식 컴포넌트인 해당 컴포넌트도같이
  리렌더되고 있는 상황이다. 

  이런 문제를 React.memo를 이용해서 해결하고자 한다
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

export default React.memo(Header);