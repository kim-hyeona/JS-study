/*  
  프로젝트 준비하기

  1. 요구사항 분석하기
  2. 리액트 앱 만들기
  3. 폰트 설정
  4. 이미지 준비

*/
import { Routes, Route ,Link } from "react-router-dom"

import Diary from "./pages/Diary"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import New from "./pages/New"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/diary/:id" element={<Diary/>} />
        {/* Route 컴포넌트에서 /diary/:id 형식의 동적 경로 작성 이제 경로가 유동적인 Diary 컴포넌트를 페이지에 렌더링 할 수 있다. */}
        <Route path="/edit" element={<Edit/>} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
    </div>
  )
}

export default App
