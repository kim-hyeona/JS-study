// 리액트 컴포넌트 라이프 사이클
/* 
  리액트 컴포넌트도 탄생과 죽음이 있는 생애주기가 있다
  이를 다른 말로 라이프 사이클이라고 하는데 이는 크게 3단계로 구분한다

  mount => update => unmount

  mount 탄생 : 컴포넌트를 페이지에 처음 렌더링 할때

  update 갱신 : State나 Props의 값이 바뀌거나 부모 컴포넌트가 리렌더해 자신도 리렌더될때

  unmount 사망 : 더 이상 페이지에 컴포넌트를 렌더링 하지 않을때

  라이프 사이클을 이용하면 컴포넌트가 처음 렌더링될 때 특정 동작을 하도록 만들거나
  업데이트할때 적절한지 검사하거나, 페이지에서 사라질 때 메모리를 정리하는 등
  여러 유용한 작업을 단계에 맞게 할 수 있다 이를 라이프 사이클 제어라고 한다

  리액트 훅의 하나인 useEffect를 이용하면 이 사이클을 쉽게 제어할 수 있다
*/  
