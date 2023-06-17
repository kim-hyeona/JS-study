// Props와 State
/* 
  동적으로 변하는 값인 리액트의 State 역시 일종의 값이므로 Props로 전달 할 수 있다
  */

import React from 'react';
import {useState} from "react";

function Viewer({number}){
//  Viewer 컴포넌트를 선언 props로 State7 컴포넌트에 있는 State 변수 number가 전달
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function State7(props) {
  const [number, setnumber] = useState(0);
  const onIncrease = () => {
    setnumber(number + 1);
  }
  const onDecrease = () => {
    setnumber(number - 1);
  }

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number}></Viewer>
      {/* State에서 Viewer을 자식컴포넌트로 사용하며 props로 변수 number를 전달 */}
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    
    </div>
    
  );
}

export default State7;