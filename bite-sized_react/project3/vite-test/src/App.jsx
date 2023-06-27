import React from 'react';
import { useReducer, useRef , useEffect, useState} from "react"
import { Routes, Route } from "react-router-dom"

import Diary from "./pages/Diary"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import New from "./pages/New"

import "./style/app.css"

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const idRef = useRef(0);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type:"CREATE",
      date:{
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  }

  function reducer(state, action) {
    switch (action.type) {
      case "CREATE":{
        return [action.data, ...state];
      }
      case "UPDATE": {
        return state.map((it) =>
          String(it.id) === String(action.data.id) ? {...action.data} : it
        );
      }
      case "DELETE": {
        return state.filter((it) => String(it.id) !== String(action.targetId))
      }
      case "INIT": {
        return action.data;
      }
      default:{
        return state;
      }
    } 
  }
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type:"UPDATE",
      date: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
  }

  const mockData = [
    {
      id:"mock1",
      date: new Date().getTime() - 1,
      content: "mock1",
      emotionId: 1,
    },
    {
      id:"mock2",
      date: new Date().getTime() - 2,
      content: "mock2",
      emotionId: 2,
    },
    {
      id:"mock3",
      date: new Date().getTime() - 3,
      content: "mock3",
      emotionId: 3,
    },
  ]

  useEffect(() => {
    dispatch({
      type:"INIT",
      data: mockData,
    });
    setIsDataLoaded(true)
  },[]);

  if(!isDataLoaded) {
    return <div>데이터를 불러오는 중임다</div>
  } else {
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete
        }}
      >
        <div className="App">
          <p>랜더링확인용</p>
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/new" element={<New/>} />
                <Route path="/diary/:id" element={<Diary/>} />
                {/* Route 컴포넌트에서 /diary/:id 형식의 동적 경로 작성 이제 경로가 유동적인 Diary 컴포넌트를 페이지에 렌더링 할 수 있다. */}
                <Route path="/edit/:id" element={<Edit/>} />
          </Routes>      
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;

/*  
  프로젝트 준비하기

  1. 요구사항 분석하기
  2. 리액트 앱 만들기
  3. 폰트 설정
  4. 이미지 준비

*/