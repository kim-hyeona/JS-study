/* 
  검색에 따라 필터링된 할 일 아이템 렌더링
*/

import React from 'react';
import "../style/TodoList.css"
import Todoltem from "./Todoltem"
import { useState } from 'react';

const TodoList = ({ todo , onUpdate , onDelete }) => {

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
   // 서치 기능
  const getSearchResult = () => {
    return search === ""
    ? todo
    : todo.filter((it) => it.content.includes(search.toLocaleLowerCase()));
  }

  return (
    <div className='TodoList'>
      <h4>Todo List</h4>
      <input value={search} onChange={onChangeSearch} className='searchbar' placeholder='검색어를 입력하세요' />
      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          <Todoltem{...it} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;