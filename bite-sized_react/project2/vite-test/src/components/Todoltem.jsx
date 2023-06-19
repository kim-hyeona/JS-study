/* 
  할 일 아이템의 수정 및 삭제
*/

import React from 'react';
import "../style/Todoltem.css"

const Todoltem = ({id, content,isDone,createdDate,onUpdate,onDelete}) => {
  // Props를 구조 분해 할달
  const onChangeCheckbox = () => {
    onUpdate(id);
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input type='checkbox' checked={isDone} onChange={onChangeCheckbox} />
        {/* 체크박스 입력 폼의 체크 여부를 isDone(false)로 설정 */}
      </div>

      <div className='title_col'>{content}</div>
      {/* 할 일을 페이지에 표시하기 위해 content 렌더링 */}
      <div className='date_col'>{new Date(createdDate).toDateString()}</div>
      {/* 생성자의 인수로 createdDate를 전달해 타임스탭프값을 Date 형식으로 변환 toDateString()으로 문자열변환 */}
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default Todoltem;