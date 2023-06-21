import React from 'react';
import { useParams } from 'react-router-dom';


/* 
  URL 파라미터로 경로 설정하기
*/
const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}번의 일기</div>
      <div>Diary 페이지임다</div>
    </div>
  );
};

export default Diary;