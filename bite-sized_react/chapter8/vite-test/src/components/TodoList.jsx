/* 
  검색에 따라 필터링된 할 일 아이템 렌더링
*/

import React from 'react';
import "../style/TodoList.css"
import Todoltem from "./Todoltem"
import { useState, useMemo, useContext } from 'react';
import { TodoContext } from '../App';

const TodoList = () => {
  const {todo, onUpdate, onDelete } = useContext(TodoContext);

  // useMemo를 이용해 [할 일 관리] 앱 최적화하기
  /* 
    useMemo를 사용하면 특정 함수를 호출했을 때 그 함수의 반환값을 기억한다
    그리고 같은 함수를 호출하면 기억해 두었던 값을 반환한다
    따라서 useMemo를 이용하면 함수의 반환값을 다시 구하는 불필요한 연산을 수행하지 않아 성능을 최적화 할 수 있다

    이처럼 함수의 연산결과를 기억하는 것을 메모리제이션이라고 한다

    useMemo의 기본 사용법
    const value = useMemo((콜백함수)=>[의존성배열])

    다음과같이 useMemo를 사용하면 의존성 배열의 값이 변할때만 계산해 value에 저장한다

    const value = useMemo(()=>{
    return count*count;
    },[count])
  */

    const analyzeTodo = useMemo(() => {
      const totalCount = todo.length;
      const doneCount = todo.filter((it) => it.isDone).length;
      const notDoneCount = totalCount - doneCount;
      return {
        totalCount,
        doneCount,
        notDoneCount
      };
    },[todo])

  // const analyzeTodo = () => { // todo에 저장된 아이템 개수에 비례해 수행할 연산량이 증가하여 성능이슈가 생길 수 있다
  //   console.log("성능이슈생김?") // 컴포넌트 내부에서 선언한 함수는 렌더링 할때마다 실행됨 컴포넌트 렌더링 = 함수 호출
  //   const totalCount = todo.length;
  //   const doneCount = todo.filter((it) => it.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //     return {
  //       totalCount,
  //       doneCount,
  //       notDoneCount
  //     };
  // };

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  
  // React.memo를 이용해 할 일 관리 앱 최적화하기
  /* 
    React.memo는 컴포넌트가 모든 상황에서 리렌더되지 않도록 강화함으로써 서비스를 최적화하는 도구이다
  */
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
      <div>
        <div>총 개수:{totalCount}</div>
        <div>완료된 할 일:{doneCount}</div>
        <div>아직 완료하지 못한 할 일:{notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} className='searchbar' placeholder='검색어를 입력하세요' />
      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          <Todoltem{...it} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo: [],
};
export default TodoList;