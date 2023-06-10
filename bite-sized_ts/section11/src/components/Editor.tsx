import React from 'react';
import { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

const Editor = (props:Props) => {
  const [text, setText] = useState(""); //인수로 받은 초기값의 타입을 받음

  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value)
  };

  const onClickButton = () => {
      props.onClickAdd(text);
      setText("");
  };

  return (
    <div>
      <input
      value={text}
      onChange={onChangeInput}/>
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};

export default Editor;