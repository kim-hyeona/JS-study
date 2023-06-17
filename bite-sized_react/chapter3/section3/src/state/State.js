// 컴포넌트와 상태
// State 이해하기
/* 
  State는 상태라는 뜻
  상태는 어떤 사물의 형편이나 모양을 일컫는 말이다

  리액트 컴포넌트는 State값에 따라 다른 결과를 렌더링한다
*/

/* 
  State의 기본 사용법
  
  // useState로 State 생성

  const [state변수, set함수] = useState(초기값)
  const [light, setLight] = useState('off');
  
  useState를 호출하면 2개의 요소가 담긴 배열을 반환한다

  배열의 첫번째 요소는 현재상태의 값을 저장하고 있는 변수이다
  두번째 요소는 State 변수의 값을 변경하는 즉 상태를 업데이트하는 함수이다

  useState를 호출할때 인수로 값을 전달하면 이 값이 State의 초기값이 된다
  위 코드에서 초기값으로 off를 전달했으니 초기의 값은 off이다. 
*/

import React from 'react';
import {useState} from "react";

function State(props) {
  console.log('렌더링해보자고');

  const [count,setCount] = useState(0) 

  const onIncrease = () =>{
    setCount(count + 1); //set함수인 setCount를 호출해서 인수로 count + 1이라는 값을 전달
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
/* 
  set함수를 호출해 State값을 변경ㅎ아면 변경값을 페이지에 반영하기 위해 컴포넌트를 렌더링한다
  리액트에서는 이것을 컴포넌트의 업데이트라고 한다
  컴포넌트가 페이지에 렌더링 하는 값은 컴포넌트 함수의 반환값이며
  컴포넌트를 다시 렌더링한다고 하는것은 컴포넌트 함수를 다시 호출하겠다는 의미이다
  버튼 +를 클릭할때마다 콘솔에 '렌더링해보자고'가 출력된다

  컴포넌트는 자신이 관리하는 State 값이 변하면 다시 호출된다
  그리고 변경된 state값을 페이지에 렌더링하는데
  state값이 변해 컴포넌트를 다시 렌더링하는것을 리렌더링이라고 한다

  리액트 컴포넌트는 자신이 관리하는 state값이 변하면 자동으로 리렌더링이 된다
*/
export default State;