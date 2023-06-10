import React from 'react';
import { Todo } from "../types"

interface Props extends Todo{
  onClickDelete: (id: number) => void;
}

function Todoitem(props:Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id)
  };

  return (
    <div>
      {props.id}번:{props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}

export default Todoitem;