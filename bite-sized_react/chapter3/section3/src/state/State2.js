// state로 사용자 입력 관리하기
// input태그로 텍스트를 입력하는 폼을 만들고 사용자가 텍스트를 입력할때마다 콘솔에 출력하는 이벤트 핸들링 구현

import React from 'react';
import { useState } from 'react'

function State2(props) {
  
  const [text,setText] = useState(''); // 빈문자열을 초기값으로 하는 State변수 text를 생성
  const handleOnChange = (e) => {
    setText(e.target.value); //폼에 입력한 텍스트를 변경할때마다 set함수를 호출해 text값을 현재 입력한 텍스트로 변경
    // console.log(e.target.value); //이벤트 객체를 매개변수로 저장해 사용자가 폼에 입력한 값을 콘솔에 출력
  };
  return (
    <div>
      <input value={text} onChange={handleOnChange}/> {/* input태그의 value속성에 state변수 text를 설정 */}
      <div>{text}</div>{/* 변수 text의 값을 페이지에 렌더링 */}
    </div>
  );
}

export default State2;