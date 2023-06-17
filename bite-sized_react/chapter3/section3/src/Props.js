// 컴포넌트에 값 전달하기
// 리액트 앱을 만들다 보면 컴포넌트가 다른 컴포넌트에 값을 전달해야하는 상황이 생긴다


// Props란?
/* 
  리액트에서는 부모가 자식 컴포넌트에 단일 객체 형태로 값을 전달할 수 있다
  이 객체를 리액트에서는 props라고 한다 properties의 줄임말로 속성이란 뜻이다. 

  리액트에서는 보통 재사용하려는 요소를 컴포넌트로 만든다
  예를 들어 게시판 페이지를 만든다고 가정했을때
  사용자가 게시판에서 작성한 글은 게시물 리스트에서 하나의 항목으로 표시된다
  
  그런데 리스트에 존재하는 여러 게시물 항목은 내용은 각기 다르지만 모두 동일한 구조이다
  
  리액트에서는 내용은 다르지만 구조가 같은 요소를 주로 컴포넌트로 분리한다

  여러 게시물 리스트를 페이지에 표시할때는 이 컴포넌트를 반복해 렌더링하고
  게시물 각각의 내용은 props로 전달하는 것이다

  리액트에서는 컴포넌트의 공통 기능이 아닌 세부 기능을 표현할때 props를 사용한다
  
  보통 리액트에서 컴포넌트에 값을 전달하는 경우는 세부 사항들, 즉 컴포넌트의 속성을 지정하는 경우다
  따라서 컴포넌트에 값을 전달하는 속성들이라는 점에서 properties 이를 간단히 줄여 props라고 한다
*/

// Props로 값 전달하기
/* 
  주의할 점은 props는 부모만이 자식 컴포넌트에 전달할 수 있다는 것이다
  자식 컴포넌트에서 부모 컴포넌트로 전달하는것은 성립하지 않는다
*/



// props로 하나의 값 전달하기
/* 
// 부모 컴포넌트
  const name = "김현아";

  return (
    <>
    <자식 컴포넌트 name={name}/> // props를 전달하려는 자식 컴포넌트 태그에 이름 = {값} 형식으로 작성한다
    </>
  )


// 자식 컴포넌트
  function 자식컴포넌트(props){ // 전달된 객체 props는 함수 매개변수 현태로 저장됨
    console.log(props);
    return <div>{props.name}</div> //객체 props의 name 프로퍼티값을 렌더링
  }
    
*/



// props로 여러개의 값 전달하기
/* 
  // 부모컴포넌트
    const name = "김현아";

  return (
    <>
    <자식 컴포넌트 name={name} location={"경기도"}/> // 변수를 미리 선언하지 않아도 객체 props에 프로퍼티를 추가해 전달
    </>
  )


  // 자식 컴포넌트
  function 자식컴포넌트(props){ // 전달된 객체 props는 함수 매개변수 현태로 저장됨
    console.log(props);
    return <div>{props.name}은 {props.location}에 거주합니다</div> 
  }
*/


// 구조분해할당으로 여러 개의 값 사용하기
/* 
  props로 전달된 값이 많으면 이 값을 사용할때마다 객체의 점 표기법을 사용해 불편해진다
  props는 객체이므로 구조 분해 할당을 통해 간편하게 사용 할 수 있다.


 function 자식컴포넌트(props){
    const {name, location} = props; // 매개변수 props에 있는 name,location 프로퍼티를 구조분해할당하여 상수에 저장
    return (
      <div>{name}은 {location}에 거주합니다</div> 
    );
  } 


  // 자식 컴포넌트의 매개변수에서 구조분해할당하여 간결하게 코드 작성하기

 function 자식컴포넌트({name, location}){
    return (
      <div>{name}은 {location}에 거주합니다</div> 
    );
  }   


  // 스프레드 연산자로 여러 개의 값 쉽게 전달하기
  // 부모 컴포넌트에서 전달할 값이 많아지면 값을 일일이 명시해야하는건 불편함으로 스프레드 연산자 사용

  // 부모컴포넌트
    
  const exProps = { // 자식 컴포넌트에 전달할 값을 객체로 만들기
    name: "김현아",
    location: "경기도"
  };

  return (
    <>
    <자식 컴포넌트 {...exProps}/> // 스프레드연산자로 각각의 프로퍼티를 props 값으로 전달
    </>
  )


  // 자식 컴포넌트
  function 자식컴포넌트(props){ // 전달된 객체 props는 함수 매개변수 현태로 저장됨
    console.log(props);
    return <div>{props.name}은 {props.location}에 거주합니다</div> 
  }
*/


// 기본값 설정하기 defaultProps
/* 
    // 부모컴포넌트
    
  const exProps = { // 자식 컴포넌트에 전달할 값을 객체로 만들기
    name: "김현아",
    location: "경기도"
    // favorList: ["강아지","만화보기","외식하기"] // 객체 exProps에 배열 추가
    // 전달받지 않았음을 가장하기 위한 주석  
  };

  return (
    <>
    <자식 컴포넌트 {...exProps}/> // 스프레드연산자로 각각의 프로퍼티를 props 값으로 전달
    </>
  )

    // 자식 컴포넌트
  function 자식컴포넌트({name,location,favorList}){ 
    return(
      <>
      <div>{name}은 {location}에 거주합니다</div> 
      <div>{favorList.length}개의 활동을 좋아합니다<div> 
      </>
    )
  }

  자식컴포넌트.defaultProps = { // 컴포넌트가 받을 props에서 favorList를 기본으로 설정
    favorList: []
  }

  // 실수로 부모컴포넌트에서 배열 favorList를 전달하지 않아도 오류가 발생하지 않음 
  // 자식 컴포넌트에서 favorList의 기본값을 빈 배열로 설정해두었기때문임

  실무에서는 백엔드 서버가 제공하는 데이터를 Props로 주고 받느데 이때 예상치 못한 서버 오류로 인해
  정상적인 값을 받지 못하면 오류가 발생한다 defaultProps를 이용하면 효율적으로 이런 오류를 방지할 수 있다
*/


// props로 컴포넌트 전달
/* 
  컴포넌트 간에 props로 문자열이나 숫자 자바스크립트 값을 전달할 수 있다
  그러나 props로 컴포넌트 자체도 전달할 수 있다
*/

/* 
  // 부모컴포넌트 파일

  function ChildComp(){ 
  return <div>child componenet</div>
  }

  function 부모컴포넌트(){
    return(
      <div>
        <자식컴포넌트>
        <ChildComp/>
        <자식컴포넌트/>
      </div>
    )
  }

  리액트에서는 자식 컴포넌트에 또 다른 컴포넌트를 배치하면 배치된 컴포넌트는
  자동으로 Props의 children 프로퍼티에 저장되고 전달됨
*/

/* 

// 자식 컴포넌트 파일

  function 자식컴포넌트({chidren}){
  console.log(chidren);
  return <div>{chidren}</div>
}
*/



