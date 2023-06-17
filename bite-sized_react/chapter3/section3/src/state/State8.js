// State와 자식 컴포넌트
/* 
  부모의 State 값이 변하면 해당 State를 props로 받은 자식 컴포넌트 역시 리렌더링된다
  리액트에서는 부모 컴포넌트가 State가 변한다고 해서 리렌더 될 이유가 없다

  의미없는 리렌더가 자주 발생하면 웹 브라우저의 성능은 저하된다 따라서
  컴포넌트의 부모-자식관계에서 state를 사용할때는 늘 주의가 필요하다
*/

import React from 'react';

function State8(props) {
  return (
    <div>
      
    </div>
  );
}

export default State8;