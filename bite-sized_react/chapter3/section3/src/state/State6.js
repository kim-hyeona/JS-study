// 여러 개의 사용자 입력 관리하기

/* 
  회원가입을 유도하는 페이지에는 사용자의 입력폼이 하나가 아니라
  작게는 3개 많게는 10개까지 되는 곳도 있음

  이름,성별,출생연도,자기소개등을 한번에 입력가능한 폼 만들기
*/
import React from 'react';
import { useState } from 'react'

function State6(props) { // 객체 자료형으로 state를 하나 생성하고 초기값을 빈 문자열로 생성
  const [state, setState] = useState({
    name:"",
    gender:"",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => { // 이벤트 객체 e를 매개변수로 저장하고 setState를 호출
    console.log('현재 수정 대상',e.target.name);
    console.log('수정값:',e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value, //입력폼의 name속성을 key로, 입력폼에 입력한 값을 value로 지정
    /* e.target.name 은 현재 이벤트가 발생한 요소의 name속성으로 select에서 onchange 이벤트가 발생했다면
      e.target.name은 gender가 된다
    */
  })
  }
  return (
    <div>
        <div>
          <input name='name' // 모든 입력 폼에 name 속성을 지정
           value={state.name} // 모든 입력폼의 value를 객체 state의 프로퍼티로 설정
           onChange={handleOnChange} // 사용자의 입력을 처리할 이벤트 핸들러 설정
           placeholder='이름' /> 
        </div>
        <div>
          <select name="gender" value={state.gender} onChange={handleOnChange}>
            <option key={""}></option> 
            <option key={"남성"}>남성</option>
            <option key={"여성"}>여성</option>
            <option key={"알리고 싶지 않음"}>알리고 싶지 않음</option>
          </select>   
        </div>
        <div>
          <input type="date" name='birth' value={state.birth} onChange={handleOnChange}/>
        </div>
        <div>
          <textarea name="bio" value={state.bio} onChange={handleOnChange}></textarea>
        </div>
    </div>
  );
}

export default State6;