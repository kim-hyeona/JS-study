// Ref
/* 
  리액트의 Ref를 이용하면 돔 요소들을 직접 조작할 수 있다
  Ref는 Ref-erence의 줄임말로 참조라는 뜻이다
*/

// useRef 사용하기
/* 
  리액트에서는 useRef라는 리액트 함수를 이용해 Ref객체를 생성합니다.
*/

import React from 'react';
import { useState , useRef } from "react";

function Ref1(props) {
  const [text, setText] = useState("");
  const textRef = useRef(); // 함수 useRef는 인수로 전달한 값을 초깃값으로 하는 Ref객체를 생성

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if(text.length < 5){
      textRef.current.focus(); // 현재 input태그로 지정한 폼에 입력한 텍스트가 다섯글자보다 작다면 포커스실행
    } else {
      alert(text);
      setText("");// 텍스트폼에 입력한 값을 초기화하기위해 setText를 호출하고 인수로 빈 문자열을 전달
    }
  }

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
}

export default Ref1;