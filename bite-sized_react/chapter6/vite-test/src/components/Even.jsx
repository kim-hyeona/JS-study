import React from 'react';
import { useEffect } from 'react';

const Even = () => {
  useEffect(()=>{ // 의존성배열로 빈배열 전달하고 콜백함수가 화살표함수를 반환하게 함
    return () => { // 함수 useEffect에 의존성 배열로 빈 배열을 전달하고 콜백함수를 반환하면 함수 컴포넌트는 언마운트 시점에 실행됨 
      console.log("Even 컴포넌트 언마운트")
    }
  })
  return <div>현재 카운트는 짝수 입니다</div>;
};

export default Even;