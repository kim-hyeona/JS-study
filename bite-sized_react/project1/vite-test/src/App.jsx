import { useState } from "react";
import Controller from "./components/Controller"
import Viewer from "./components/Viewer"
import "./style/App.css";


/* 
  구현해야할 기능
    Controller 컴포넌트에 있는 버튼을 클릭하면 Viewer 컴포넌트의 숫자가 바뀐다
    이 기능을 구현할 state는 App 컴포넌트에 만든다. 

    현재카운트가 들어있는 Viewer 컴포넌트에 State를 만들면 Controller 컴포넌트에
    set함수를 전달할 방법이 없다.

    Controller에 state를 만들면 변수를 전달할 방법이 없다

    두 컴포넌트는 부모-자식 관계가 아니므로 App 컴포넌트에 만들어야한다
*/
function App() {

  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1> 
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  )
}

export default App

/* 
  리액트는 규모가 크고 빠른 웹 애플리케이션을 만들기 좋은 기술이다
  이를 위해 리액트가 권장하는 애플리케이션 설계방식에 대해 살펴본다

  리액트에서 컴포넌트간에 데이터를 전달할 때는 Props를 사용하는데
  전달 방향은 언제나 부모로부터 자식에게 전달하는 방식이다
  리액트의 이러한 데이터 전달 특징을 단방향 데이터 흐름이라고 한다
  
  리액트 앱을 설계할때는 데이터는 위에서 아래로, 이벤트는 아래에서 위로 향하도록
  설계를 해야한다
*/