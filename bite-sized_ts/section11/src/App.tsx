import './App.css';
import Editor from "./components/Editor";
import { useReducer,useRef,useEffect } from "react";
import { Todo } from "./types"
import Todoitem from './components/Todoitem';
import { fchmod } from 'fs';

type Action = {
  type: "CREATE",
  data:{
    id:number,
    content: string;
  }
} | {type:"DELETE", id:number}

function redcer(state:Todo[], action: Action){
  switch(action.type){
    case "CREATE": {
      return [...state,action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id );
    }
  }
}

function App() {

    const [todos,dispatch] = useReducer(redcer,[]);
    const idRef = useRef(0);

    const onClickAdd = (text: string) => {
      dispatch({
        type:"CREATE",
        data: {
          id: idRef.current++,
          content: text,
        }
      })
    };

    const onClickDelete = (id:number) =>{
    dispatch({
      type:"DELETE",
      id:id,
    });
  }

    useEffect(()=>{
      console.log(todos)
    },[todos])


    return (
      <div className="App">
        <h1>Todo</h1>
        <Editor onClickAdd={onClickAdd} />
        <div>
          {todos.map((todo)=>(
            <Todoitem key={todo.id} {...todo} onClickDelete={onClickDelete} />
          ))}
        </div>
      </div>
    );
}

export default App;
