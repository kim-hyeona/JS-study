/* 
최적화와 메모이제이션

최적화란 한마디로 웹 서비스의 성능을 개선하는 기술
  프로그래밍에서 불필요하게 낭비되는 연산을 줄여 렌더링의 성능을 높이는 방법
  최적화가 잘 된 웹은 사용자를 불필요하게 기다리게 하지도 않으며
  사용자경험을 긍정적으로 만든다

  리액트는 성능면에서 매우 빠르고 브라우저의 불필요한 연산도 최소화한다
  리액트라고 해서 프로그래머의 부주의나 실수로 인한 성능저하까지 모두 막지는 못한다
  실수로 인한 성능 낭비는 프로그래머 자신이 바로 잡아야한다

  성능저하를 줄이는 것이 훌륭한 서비스를 만드는 방법이고 프로그래머에게 요구되는
  핵심 역량이다

  최적화 방법으로는 코드/폰트/이미지 파일의 크기를 줄이는 등 여러기술이 있으나
  내용이 방대할 뿐만 아니라 일부 방법은 아직 확실한 정답은 없다
*/

import { useContext } from "react";

// 리액트의 연산 낭비 줄이기
/* 
  리액트 앱에서 연산 최적화는 대부분 메모리제이션 기법을 사용한다
  메모리제이션은 특정 입력에 대한 결과를 계산해 메모리 어딘가에 저장했다가
  동일한 요청이 들어오면 저장한 결과값을 제공해주어 빠르게 응답하는 기술이다

  알고리즘을 공부하는 사람들은 이 기능을 동적 계획법 다이나믹 프로그래밍 줄여서 DP라고 한다
*/


// 고차 컴포넌트
/* 
  HOC는 Higher Order Component의 약자로 우리말로는 고차 컴포넌트라고 한다
  고차 컴포넌트는 컴포넌트의 기능을 다시 사용하기 위한 리액트의 고급 기술로
  useMemo, useEffect처럼 use 키워드가 앞에 붙는 리액트 훅과는 다르다
  고차 컴포넌트는 인수로 전달된 컴포넌트를 반환하는 함수이다
  고차 컴포넌트는 전달된 컴포넌트를 그대로 반환하는건 아니고 어떤 기능을 추가해 반환한다
  이렇게 기능을 추가해 반환한 컴포넌트를 '강화된 컴포넌트'라고 한다
  ex) const EnhancedComp = withFunc(Comp);
*/


// 횡단 관심사
/* 
  고차 컴포넌트를 이용하면 횡단 관심사 문제를 효율적으로 해결할 수 있어 실무에서 많이 활용된다.
  횡단 관심사는 크로스 커팅 관심사(Cross-Cutting Concerns)라고도 하며
  프로그래밍에서 비즈니스 로직과 구분되는 공통 기능을 지칭할 때 사용하는 용어이다
  
  반면 비즈니스 로직은 해당 컴포넌트가 존재하는 핵심 기능을 표현할때 사용
*/

const CompA = () => {
  console.log("컴포넌트가 호출되었습니다");
  return <div>CompA</div>
}

const CompB = () => {
  console.log("컴포넌트가 호출되었습니다");
  return <div>CompB</div>
}

/* 
  위에 두 로직은 각각 컴포넌트의 핵심 기능인 비즈니스 로직이 아니라
  여러 컴포넌트에서 공통으로 사용하는 횡단 관심사에 해당하는 기능이다

  프로그래밍에서는 횡단 관심사는 주로 로깅, 데이터베이스 접속, 인가 등 여러곳에서 
  호출해 사용되는 코드이다
*/

/* 
  React.memo는 인수로 전달한 컴포넌트를 메모리제이션된 컴포넌트로 만들어 반환한다
  이때 props가 메모리제이션의 기준이된다
  즉, React.memo가 반환하는 컴포넌트는 부모 컴포넌트에서 전달된 props가 변경되지 않는 한
  리렌더가 되지 않는다 컴포넌트가 크고 복잡할수록 불필요한 렌더링을 방지하면
  브라우저의 연산량을 줄여 최적화에 도움이 된다. 
  사용 방법은 메모리제이션을 적용하고 싶은 컴포넌트를 React.memo로 감싸면 된다
  const memoizedComp = React.memo(메모리제이션하고자하는 컴포넌트)
  
  // 다음과 같이 함수 컴포넌트를 선언함과 동시에 메모리제이션하는것도 가능
  
  const CompA = React.memo(() => {
    console.log("컴포넌트가 호출되었습니다");
    return <div>CompA</div>
  })

  // React.memo는 Props의 변경 여부를 기준으로 컴포넌트의 리렌더 여부를 결정
     만약 Props로 전달되는 값이 많을 때는 판별함수를 인수로 전달해 Props의 특정 값만으로
     리렌더 여부를 결정할 수 있다

  const Comp = ({a, b, c}) => {
    console.log("컴포넌트호출");
    return <div>Comp</div>
  }

  function areEqual(prevProps, nextProps){
    if(prevProps.a === nextProps.a) {
      return true; // 판별함수가 true면 리렌더가 되지않고
    } else {
      return false; // 판별함수가 false면 리렌더
    }
  }

  const memoizedComp = React.memo(Comp, areEqual);     
*/

// Context
/* 
  context를 사용하는 이유
  context를 사용하는 까닭은 Props Drilling 문제를 해결하기 위해서이다.

  Props Drilling 문제는 리액트 컴포넌트 계층 구조에서 컴포넌트 간에 값을 전달할때 생긴다
  Props는 컴포넌트 트리에서 언제나 부모에서 자식으로 단방향으로 전달된다

  리액트에서는 자식의 자식, 즉 트리에서 2단계 이상 떨어져있는 컴포넌트에 직접 데이터를 전달하는것이 불가능하다

  결론은 원하는 목적지까지 데이터를 전달하기 위해서는 경로상에 있는 모든 컴포넌트에 일일이 Props를 전달해야한다

  Props를 전달하는 과정이 마치 드릴로 땅을 파고 내려가는 것 같다고 하여 이를 Props Drilling 문제라고 한다

*/

/* 
  Context란 문맥이란 뜻으로 리액트의 Context 역시 이와 비슷하다
  리액트에서 Context는 같은 문맥 아래 있는 컴포넌트 그룹에 데이터를 공급하는 기능이라는 의미로 사용된다

  Context를 이용하면 단계마다 일일이 Props를 전달하지 않고도 컴포넌트 트리 전역에 데이터를 공급할 수 있어
  Props Drilling 문제를 간단하게 해결할 수 있다. 
*/

//ContextAPI 란?
/* 
  ContextAPI는 Context를 만들고 다루는 리액트 기능이다. 
  ContextAPI를 이용해 Context를 만들고 컴포넌트 트리에 데이터를 공급한다

  // Context 만들기
  
  React.createContext를 이용하면 새로운 Context를 만들 수 있습니다. 

  import React from 'react'; // ContextAPI에서 새 Context를 만드는 createContext 기능을 사용하려면 react 라이브러리의 객체를 불러와야한다 
  const MyContext = React.createContext(defaultValue); //createContext 메서드를 호출해 새로운 Context를 만든다 인수로 전달한 값은 생략가능 

  // Context에 데이터 공급하기
  
  Context에서 데이터 공급하려면 Context.Provider 기능을 사용해야한다
  이는 Context객체에 기본으로 포함된 컴포넌트이다

  import React from 'react';

    function memo(props) {
      return (
        <div>
          <MyContext.Provider value={data}> // MyContext.Provider를 App 컴포넌트의 자식으로 배치 
            < body/>                           Provider가 설정한 자식,자손 컴포넌트들은 MyContext로 묶여 이 객체에서
          </MyContext.Provider>                공급하는 데이터는 사용할 수 없다 Provider 컴포넌트에 props를 전달해  
        </div>                                 MyContext가 공급할 값을 설정
      );
    }

  export default memo;


  Provider 컴포넌트는 Props로 공급할 데이터를 받아 컴포넌트 트리에서 자신보다 하위에 있는
  모든 컴포넌트에 데이터를 공급한다. 


  // Context가 공급하는 데이터 사용하기
    useContext는 특정 Context가 공급하는 데이터를 불러오는 리액트 훅이다

    import React, { useContext } form 'react' // useContext를 react 라이브러리에서 불러온다

    const MyContext = React.createContext(defaultValue);
    
    function App () {
      // ...
    }

    function Main () {
      const date = useContext(MyContext); // useContext를 호출하고 인수로 값을 공급할 Context를 전달한다
      // 함수 useContext는 해당 Context가 공급하는 값을 반환하고 반환한 값을 변수 data에 저장  
    }
*/

/* 
  정리하면 createContext를 이용해 Context를 만들고, 값을 컴포넌트 Context.Provider로 감싼다
  그리고 함수 useContext를 호출해 Context가 공급하는 값을 불러와 사용한다
*/

