// JSX 스타일링

// 인라인스타일링
/* 
  인라인 스타일링이란 JSX 문법중 하나로 HTML style 속성을 이용해
  직접 스타일을 정의하는 방법.
*/

// 스타일 파일 분리
/* 
  html에서는 스타일을 정의한 다음 css파일을 따로 작성한 다음 link 태그로 불러와 사용한다
  리액트의 JSX에서도 마찬가지로 import를 사용해 불러올 수 있다
*/

import React from 'react';
import "./style.css" // 스타일 파일 분리

function Section6(props) {
  return (
    <>
     <div style={{ backgroundColor: "red", color:"blue" }}> {/* 인라인 스타일링 */}
      인라인 스타일링
     </div> 
     <div className='contents'> {/* JSX에서는 class가 아니라 className 작성 */}
      스타일 파일 분리
     </div>
    </>
  );
}

export default Section6;