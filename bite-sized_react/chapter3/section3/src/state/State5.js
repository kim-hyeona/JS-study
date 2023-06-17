// 글상자로 여러 줄의 텍스트입력하기

import React from 'react';
import { useState } from "react";

function State5(props) {
  const [ text, setText ] = useState("");
  const handleOnChange = (e) => {
    console.log('변경된 값:',e.target.value);
    setText(e.target.value);
  }
  return (
    <div>
      <textarea value={text} onChange={handleOnChange}></textarea>
    </div>
  );
}

export default State5;