import { useRef,useReducer,useCallback } from "react"
import Header from "./components/Header"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"
import "./style/App.css"

export const TodoContext = React.createContext(); // 이 Context의 기본값으로 설정할 값이 없으므로 인수는 생략

function redcer(state, action) {
  switch (action.type){
    case "CREATE":{
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
      it.id === action.targetId
      ?{
        ...it,
        isDone: !it.isDone,
      }: it
      );
    }
    case "DELETE":{
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}
function App() {
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

  const [todo,dispatch] = useReducer(redcer,mockTodo)

  const idRef = useRef(3);
   
  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem:{
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current +=1;
  }

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    })
  };
  
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }

  return (
    <div className="App">
      <Header/>
        <TodoContext.Provider value={{ todo,onCreate,onUpdate,onDelete }}> {/* TodoContext가 포함할 컴포넌트를 감쌈 */}
          <TodoEditor/>
          <TodoList/>
        </TodoContext.Provider>
    </div>
  )
}

export default App
