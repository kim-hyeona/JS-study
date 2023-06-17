// 드롭다운 상자로 여러 옵션 중에 하나 선택하기

import React from 'react';
import { useState } from 'react';

function State4(props) {
  const [option, setOption] = useState("");
  const handleOnChange = (e) => {
    console.log('변경된 값:',e.target.value);
    setOption(e.target.value)
  }
  return (
    <div>
      <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select>
    </div>
  );
}

export default State4;