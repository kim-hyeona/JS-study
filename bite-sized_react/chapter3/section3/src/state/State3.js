// input 태그로 날짜입력하기

import React from 'react';
import { useState } from "react";

function State3(props) {
  const [date, setDate] = useState(""); 
  const handleOnChange = (e) => {
    console.log('변경된값:', e.target.value);
    setDate(e.target.value);
  }
  return (
    <div>
      <input type="date" value={date} onChange={handleOnChange} />
    </div>
  );
}

export default State3;