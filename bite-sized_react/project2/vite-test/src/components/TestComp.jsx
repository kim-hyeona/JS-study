// 상태 변화 코드란?
/* 
  상태변화코드란 state값을 변경하는 코드이다
  함수 onIncrease onDecrease는 각각 변수 count의 값을 늘리거나 줄이므로 상태변화코드라고 할 수 있다

  상태변화 코드를 컴포넌트에서 분리한다는 것
  컴포넌트 내부에 작성된 코드를 외부에 작성하겠다는 것이다
  그것은 useState로 할 수 없고 useReducer를 사용한다

  코드를 컴포넌트에서 분리하는 이유는 하나의 컴포넌트 안에 너무 많은 상태변화 코드가 있으면
  가독성을 해쳐 유지보수를 어렵게 만들기 때문이다
*/

import React from 'react';
import { useReducer } from 'react';

function redcer(state,action) {
//컴포넌트 밖에 새로운 함수 생성
  switch(action.type){
    case "INCREASE":
      return state + action.date;
    case "DECREASE":
      return state - action.date;
    case "INIT":
      return 0;
    default:
      return state;
    }
}

function TestComp(props) {
/*   const [count,setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1)
  };

  const onDecrease = () => {
    setCount(count - 1)
  }; */

  const [ count , dispatch ] = useReducer(redcer,0)
  /* 
    const [State변수 , 상태변화촉발함수] = useReducer(상태변화함수,초깃값)

    useReducer를 호출하고 2개의 인수를 전달한다
    첫번째 인수는 함수redcer 이고 두번째 인수는 State 초기값이다
    useState처럼 똑같이 배열을 반환하는데 배열의 첫번째 요소는 State변수이고
    두번째 요소는 상태를 촉발하는 함수 dispatch이다
  */
    
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({type:"INCREASE",date:1})}>+</button>
        <button onClick={() => dispatch({type:"DECREASE",date:1})}>-</button>
        <button onClick={() => dispatch({type:"INIT"})}>0으로 초기화</button>
      </div>
    </div>
  );
}

export default TestComp;