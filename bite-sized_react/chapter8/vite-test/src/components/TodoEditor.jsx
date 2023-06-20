/* 
  새로운 할 일 아이템 생성
*/

import React from 'react';
import "../style/TodoEditor.css"
import { useState , useRef } from 'react';

const TodoEditor = ({ onCreate }) => {
  const [ content, setContent ] = useState("");
  const inputRef = useRef(); // 할일 입력 폼을 제어할 객체 생성

  const onChangeContent = (e) => {
    setContent(e.target.value)
  };

  // 
  const onSubmit = () => {
  if(!content) { /* 함수 onSubmit은 현재 content값이 빈 문자열이면,
  inputRef가 현잿값(current)으로 저장한 요소에 포커스하고 종료 */
    inputRef.current.foucs();
    return;
  }
  onCreate(content);
  setContent("") // 빈 문자열을 전달하여 새 아이템을 추가하고 난 뒤 폼 역시 초기화
}

// 엔터키를 누르면 아이템 추가
const onKeyDown = (e) => {
  if(e.keyCode === 13){
    onSubmit();
  }
}
  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 👍</h4>
      <div className='editor_wrapper'>
        <input ref={inputRef} /* 할일 입력 폼의 ref에 inputRef를 설정  */
         value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder='새로운 todo...' />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;