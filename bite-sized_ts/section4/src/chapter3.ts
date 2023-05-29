/* 
  함수 오버로딩
  :하나의 함수를 매개변수의 개수나 타입에 따라
   여러가지 버전으로 정의하는 방법

   자바스크립트가 아닌 타입스크립트에서만 지원하는 문법
*/

/* 
  -> 하나의 함수 func
  -> 모든 매개변수의 타입 number
  -> Ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
  -> Ver2. 매개변수 3개 -> 이 매개변수들을 다 더한값을 출력
*/

// 버전들 => 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b:number,c:number): void;


// 함수의 실제 구현 => 구현시그니처
function func(a:number, b?:number, c?:number){
    if(typeof b === 'number' && typeof c === 'number'){
      console.log(a + b + c);
    } else {
      console.log(a * 20);
    }
}

// func();
func(1); // 만들어놓은 오버로드 시그니처 1번때문에 정상적으로 실행됨
// func(1,2);
func(1,2,3); // 만들어놓은 오버로드 시그니처 2번때문에 정상적으로 실행됨