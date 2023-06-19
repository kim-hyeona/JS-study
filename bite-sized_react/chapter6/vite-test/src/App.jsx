import { useState } from "react";
import Controller from "./components/Controller"
import Viewer from "./components/Viewer"
import "./style/App.css";
import { useEffect } from "react";
import { useRef } from "react";
import Even from "./components/Even";


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

  const [text, setText] = useState("")
  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  /* 
    함수 useEffect는 어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅이다
    이를 특정 값을 검사한다고 표현하고 
    예컨데 useEffect를 이용하면 컴포넌트의 State 값이 바뀔 때마다 변경된 값을 콘솔에 출력하게 할 수 있다
  */
 useEffect(() => {
  console.log("컴포넌트 업데이트")
 }) // 두번째 요소인 의존성 배열에 아무것도 전달하지 않으면 useEffect는 컴포넌트를 렌더링할때마다 콜백함수를 실행시킨다
  
//  useEffect에서 마운트 시점은 제외하고 업데이트 시점에만 콜백함수 실행
// 즉 페이지에 처음 렌더링할때는 콜백 함수를 실행하지 않고 리렌더될때만 실행

const didMountRef = useRef(false);

useEffect(() => { //의존배열로 아무것도 전달하지 않았으므로 콜백함수는 마운트 시점에 실행되어야함
  if(!didMountRef.current){ //조건문에서 변수 didMountRef의 값을 검사함 컴포넌트가 마운트됐는지 판단할때 사용되는데 초깃값으로 false를 설정
    didMountRef.current = true // 콜백함수를 처음 렌더링하는 마운트 시점에는 조건식이 참이되어 if문 수행
    return;                     // if문에서는 변수 didMountRef의 값을 true로 바꾸고 retun문으로 함수를 종료
  }else {   //변수 didMountRef의 값이 false가 아니라면 콜백함수의 마운트 시점이 아니기에 컴포넌트 업데이트 출력
    console.log('컴포넌트 업데이트!')
  }
})
 /* 
    정리하자면 useEffect에 의존성 배열을 인수로 전달하지 않으면 마운트, 업데이트 시점 모두 콜백함수를 호출하지만
    Ref 객체로 특정 시점에만 코드를 실행시킬 수 있다  
  */

// 컴포넌트의 마운트 시점에 실행되는 코드 작성(컴포넌트 마운트 제어)
useEffect(() => {
  console.log("컴포넌트 마운트")  
},[]) // 빈 배열을 의존성 배열로 전달하면 컴포넌트 마운트 시점에서만 콜백함수를 실행


// 컴포넌트 언마운트 제어 : 컴포넌트가 페이지에서 제거될때

// 클린업: 특정 함수가 실행되고 종료된 후에 미처 정리하지 못한 사항을 처리

    // useEffect(() => { // 의존성 배열은 전달하지 않았으니 렌더링 될때마다 첫번째 인수로 전달한 콜백함수 실행
    //  setInterval(() => { // setInterval을 호출 1초마다 콘솔에 깜빡을 출력
    //  console.log("깜빡");
    //  },1000)
    // })

/* 
  그러나 setInterval에서 정한 인터벌 1초가 아닌 매우 빠른 속도로 깜빡 문자열이 출력

  이유1) app 컴포넌트를 렌더링 할때마다 useEffect의 콜백함수는 새로운 setInterval함수를 만들고 새 인터벌을 생성
  이유2) 두번째 인수로 아무것도 전달하지 않았기 때문에 버튼을 클릭해 State를 변경하면 새 인터벌 함수를 생성
  이유3) setInterval에서 인터벌을 생성한 다음에 이를 종료하지 않았기때문 인터벌을 종료하는 cleatInterval함수를
         호출하지 않으면 문자열 출력을 멈추지 않음

         => 버큰을 클릭해 State값을 업데이트하면 App컴포넌트가 리렌더 될때마다 새로운 인터벌이 생성
            그러나 기존 인터벌을 종료하지 않았기때문에 여러개의 인터벌이 중복으로 만들어져 출력속도가 빨라지게됨
*/
  
  // useEffect(() => {
  //   const IntervalID = setInterval(() => { // 함수 setInterval은 새 인터벌을 생성하면 인터벌 식별자를 반환 이를 변수 IntervalID에 저장
  //     console.log("깜박")
  //   }, 1000);
    
  //   return () => { // useEffect에 인수로 전달한 콜백함수가 새 함수를 반환하도록 함
  //     console.log("클린업") //이 함수는 클린업 함수로 useEffect의 콜백함수가 실행되기 전이나 컴포넌트가 언마운트하는 시점에서 실행
  //     clearInterval(IntervalID); // 클린업 함수는 clearInterval를 호출하고 인수로 생성했던 인터벌 식별자를 전달해 앞서 생성한 인터벌을 삭제 
  //   }  
  // })

  /* 
    정리하면 useEffect의 콜백 함수가 반환하는 함수를 클린업 함수라고 함
    이 함수는 콜백함수를 다시 호출하기 전에 실행되고 컴포넌트를 렌더링 할때마다 새 인터벌을 생성하고
    기존 인터벌은 삭제한다

    useEffect의 콜백함수가 또 다른 함수를 반환하는 클린업 기능을 이용하면 인터벌같이 종료 이후에도 남아있는 작업을
    청소 할 수 있다
  */

 /* 
    useEffect(()=>{ //콜백함수
    },[의존성 배열])

    두번째 인수로 전달한 배열을 의존성 배열(Dependency Array) 줄여서 deps라고 하는데
    useEffect는 이 배열 요소의 값이 변경되면 첫번째 인수로 전달한 콜백함수를 실행한다

    위 코드에서 의존성 배열 요소에 State 변수 count가 있으므로 이 값이 바뀌면 콜백함수가 실행된다

    useEffect를 사용하면 특정 값이 바뀔때마다 원하는 코드를 실행시킬 수 있다
  */


    // 클린업을 이용해 컴포넌트 언마운트 제어하기


 
  return (
    <div className="App">
      <h1>Simple Counter</h1> 
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even/>}
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