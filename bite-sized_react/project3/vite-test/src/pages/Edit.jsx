import React from 'react';
import "../style/editor.css"

const Edit = ({initData, onSubmit}) => {
  return (
    <div  className='Editor'>
      <div className='editor_section'>
        <h4>오늘의 날짜</h4>
      </div>
      <div className='editor_section'>
        <h4>오늘의 감정</h4>
      </div>
      <div className='editor_section'>
        <h4>오늘의 일기</h4>
      </div>
      <div className='editor_section'>
      </div>
    </div>
  );
};

export default Edit;