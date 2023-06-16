// truthy & falsy
/* 
  자바스크립트는 불리언 자료형의 true이나 false가 아닌 값도 상황에 따라 참과 거짓으로 평가를 한다
  이러한 특성을 truthy falsy라고 한다
*/

/*
 falsy한 값이란?
 false는 아니지만 거짓과 같은 의미로 쓰이며 조건식에선 false로 평가합니다 
 ex) undefined, null, 0, -0, NaN, "", 0n 
 */

 if(!undefined){
  console.log('언디파인드는 falsy한 값입니다');
 }
 if(!null){
  console.log('null은 falsy한 값입니다');
 }


/* 
  truthy한 값은 불리언 자료형의 참은 아니지만 참과 같은 의미로 쓰이며 조건식에서 true로 평가됨
  falsy한 값을 제외한 모든 값은 모두 truthy
*/

const num = "false";

if(num){
  console.log('true');
}else{
  console.log('false');
}
// 문자열은 그대로 truthy한 값이라 true가 출력됨



/* 
  truthy falsy 응용하기
  :이러한 값들은 조건식을 간결하게 만들어준다

  값이 비었다는 의미는 특정 변수의 값이 undefined나 null일때 쓰이는 표현인데
  undefined나 null 값 모두 falsy하기때문에 조건문에서 특정 변수에 값이 있는지 없는지 확인할때 사용
*/

let varA;

if (varA){
  console.log('값이 있음');
} else{
  console.log('값이 없음'); // 출력
}

// 변수 varA는 선언만 하고 값을 할당하지 않았으므로 undefined값 즉 falsy 한 값으로 조건식에서 거짓으로 평가함