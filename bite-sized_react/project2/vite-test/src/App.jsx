/* 
  할일 데이터 관리하기

  데이터를 다루는 4개의 기능 즉 추가(Create),조회(Read),수정(Update),삭제(Delete) 기능을
  앞글자만 따서 CRUD라고 하며 CRUD는 데이터 처리의 기본 기능으로
  웹서비스라면 기본적으로 갖추고 있어야 한다.
*/



import { useState,useRef } from "react"
import Header from "./components/Header"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"
import "./style/App.css"

function App() {

      // 목 데이터 설정하기
    /* 
      목(Mock) 데이터란 모조품 데이터라는 뜻
      기능을 완벽히 구현하지 않는 상태에서 테스트를 목적으로 사용하는 데이터 임시 데이터라고 하기도 한다

      기능을 아직 개발하지 않아 데이터가 없는 상황일때 목 데이터를 사용
      임시 데이터 역할을 하는 목 데이터가 있으면 데이터 관리 기능 개발이 수월해진다
    */

      const mockTodo = [
        {
          id:0,
          isDone: false,
          content: "React 공부하기",
          createdDate: new Date().getTime(),
        },
        {
          id:1,
          isDone: false,
          content: "빨래 넣기",
          createdDate: new Date().getTime(),
        },
        {
          id:2,
          isDone: false,
          content:"노래연습하기",
          createdDate: new Date().getTime(),
        }
      ]

  // 기초 데이터 설정하기
 
  /*   useState는 리액트 훅으로 react 라이브러리에서 불러오며 리액트에서는 리스트형태의 데이터를 이용할때 배열을 이용한다
  변수 todo는 할일관리 앱에서 데이터를 저장하는 배열이면서 동시에 일종의 데이터베이스 역할을 수행
  새 할일 아이템을 만들면 빈 배열이였던 todo값은 아이템이 추가된 배열로 업데이트됨 */
   
  const [todo, setTodo] = useState(mockTodo); 

  // 데이터 모델링하기
  /* 현실의 사물이나 개념을 프로그래밍 언어의 객체와 같은 자료구조로 표현하는 행위를 
    "데이터 모델링" 이라고 한다

    데이터를 모델링하는 이유는 데이터를 어떻게 관리할지 생각하기 위함
    모델링 과정이 잘못되면 작업 과정에서 큰 문제가 발생 할 수 있으며 데이터를 관리하는
    모든 과정을 수정하게 되는데 아예 프로젝트를 처음부터 다시 시작하는 상황도 발생

    따라서 모델링은 반드시 데이터 관리 프로그램을 구현하기 전에 노트나 메모장 등에
    적어보면서 코드를 작성해야한다
  */



      // Create: 할 일 추가하기
      /* 
        1. 사용자가 새로운 할 일을 입력한다
        2. TodoEditor 컴포넌트에 있는 <추가>버튼을 클릭
        3. TodoEditor 컴포넌트는 부모인 App에게 아이템 추가 이벤트가 발생했음을 알리고 사용자가 추가한 할 일 데이터를 전달
        4. App 컴포넌트는 TodoEditor 컴포넌트에서 받은 데이터를 이용해 새 아이템이 추가된 배열을 만들고 State 변수 todo값을 업데이트
        5. TodoEditor 컴포넌트는 자연스러운 사용자 경험을 위해 할 일 입력 폼을 초기화
      */
  
  const idRef = useRef(3);
 // 앞서 작성한 목 데이터의 id가 0 1 2이기 때문에 초기값 3
      
  const onCreate = (content) => { // TodoEditor 컴포넌트에서 추가버튼을 누르면 호출할 함수
    const newItem = { // TodoEditor 컴포넌트에서 사용자가 작성한 할일 데이터를 받아 매개변수 content에 저장하고 그것을 토대로 새 할일 아이템 객체를 만들어 newItem에 저장
      id:idRef.current, // idRef의 현잿값을 새롭게 추가할 할 일 아이템의 id로 지정 만약 아이템이 처음으로 추가되는 경우라면 해당 아이템의 id는 3
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem,...todo]) // 배열의 스프레드 연산자를 활용해 newItem을 포함한 새 배열을 만들어 State 변수 todo를 이용해 업데이트
    // 이렇게 작성하면 새롭게 추가된 아이템은 항상 배열의 0번요소가 된다
    idRef.current +=1;// idRef의 현재값을 +1 아이템을 추가할 때마다 현재값이 1씩 늘어나며 모든 아이템은 고유한 id를 가지게됨
  }

  // Read: 할 일 리스트 렌더링하기
/* TodoList 컴포넌트 기능인 Read 기능 만들기*/

// 배열을 리스트로 렌더링하기
/* 배열 todo를 TodoList 컴포넌트에 props로 전달
*/

// Update: 할일 수정하기
/*
  기능 흐름 살펴보기
  1. 사용자가 TodoItem의 체크박스에 틱합니다
  2. TodoItem 컴포넌트는 함수 onUpdate를 호출하고 어떤 체크박스에 틱이
  발생햇는지 해당 아이템에 id를 인수로 전달
  3. App 컴포넌트의 함수 onUpdate는 틱이 발생한 아이템의 상태를 토글하기위해 state 업데이트
  4. App 컴포넌트의 State 값이 변경되면 TodoList에 전달하는 props의 값 또한 변경
  5. TodoList는 변경된 State값을 다시 리스트로 렌더링한다
*/

// 아이템 수정 함수

const onUpdate = (targetId) => { //매개변수 targetId로 틱이 발생한 할일 아이템의 id를 저장
  setTodo(
    todo.map( // todo값을 업데이트하기 위해서 함수 setTodo를 호출
      (it) => { //map메서드를 이용해 배열 todo에서 
        if(it.id === targetId){ // id가 targetId와 일치하는 요소를 찾으면
          return{ // isDone 프로퍼티값을 토글한 새 배열을 만들어 인수로 전달
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
      }
    )
  )
};

// 아이템 삭제 함수
const onDelete = (targetId) => {
  setTodo(todo.filter((it) => it.id !== targetId));
}

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
