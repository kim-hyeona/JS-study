// 함수 2

// 함수와 호이스팅
/* 
  호이스팅이란 프로그램에서 변수나 함수를 호출하거나 접근하는 코드가
  함수선언보다 위에 있음에도 불구하고, 마치 선언 코드가 위에 있는 것처럼 동작하는
  자바스크립트만의 기능이다
*/
func()

function func(){
  console.log('헬로 월드'); 
}

/* 
함수 선언이 함수보다 위에 선언돼있으나 자연스럽게 동작한다
자바스크립트에서 함수는 선언하기도 전에 호출할 수 있는데 이것을 호이스팅이라고 한다

자바스크립트의 내부 알고리즘이
코드를 실행하기 전에 중첩함수가 아닌 함수들은 모두 미리 찾아 생성하고 코드를 실행하기 때문에

함수 선언 코드를 호출보다 늦게 작성해도 동작한다
*/


// 함수 표현식
/* 
  함수선언 말고도 표현식을 이용하여 함수를 만들 수 있다
*/

let hi = function(){
  console.log('hello');
};

hi()

/* 
  자바스크립트에선 함수를 숫자나 문자열처럼 값으로 취급한다.
  그래서 변수에 함수를 저장할 수 있다
  변수에 함수를 저장하면 변수이름으로 함수를 호출할 수 있고 함수이름도 생략가능하여
  익명함수라고도 부른다

  주의할점

  함수 표현식을 이용해 만든 함수는 선언이 아니라 값으로 취급으로 취급하기 때문에 호이스팅이 불가능하다
  함수를 변수에 저장할때는 함수호출과 달리 소괄호를 명시하지 않는다
*/


// 콜백함수
/* 
  함수 표현식에서 자바스크립트는 함수를 값으로 취급해 변수에 저장할 수 있음을 알았는데
  함수는 다른 함수의 인수 곧 함수 자체가 값이 되어 전달 될 수 있는데
  이것을 콜백 함수라고 한다.
*/

function parentFunc(callBack){ //매개변수 callBack에 함수 childFunc이 저장될것임
  console.log('parent');
  callBack();
}

function childFunc(){
  console.log('child');
}

parentFunc(childFunc) // 매개변수 callBack에 인수로 함수 childFunc을 전달


// 콜백함수가 필요한 이유
function repeat(count){
  for(let idx = 0; idx < count; idx++){
    console.log(idx + 1);
  }
}
function repeatDouble(count){ // 매개변수로부터 5를 받고 현재 반복횟수에 2를 곱한 값을 콘솔에 출력
  for (let idx = 0; idx < count; idx++){
    console.log((idx + 1)*2); 
  }
}

repeatDouble(5)

/* 
  두 함수는 작업만 동일하고 반복문에서 수행하는 명령만 다른 상태인데
  동일한 기능의 함수가 두번 만들어져 중복코드가 발생했다
  콜백 함수를 이용하면 이러한 문제를 해결할 수 있다.
*/

 function repeat(count,callBack){
    for (let idx = 0; idx < count; idx++){ //0부터 4까지 총 5회 반복될때마다 콜백함수로 받은 함수호출하고
      callBack(idx + 1);                   // idx+1을 인수로 전달합니다
    }                                      // 따라서 함수 origin은 함수 repeat의 반복문에서 총 5회 호출되면서 1부터 5까지 콘솔에 출력한것이다
 }

 function oringin(count){ //매개변수를 콘솔에 출력하는 함수 origin
  console.log(count);
 }

 repeat(5,oringin); // 함수 repeat을 호출하고 count에는 숫자 5를 할당하고 callBack에는 함수 oringin 저장


//  만일 함수 repeat에서 반복문의 동작을 변경하고 싶다면 새함수를 만들어 repeat의 인수로 전달하면 된다




// 함수 표현식을 이용한 콜백함수

function repeat(count, callBack){
  for(let idx = 0; idx < count; idx++){
    callBack(idx + 1); //=== double(idx + 1)
  }
}

const double = function(num){ // 받은 인수에 2를 곱해 콘솔에 출력하는 익명함수를 만들어 double에 저장
  console.log(num * 2); 
} // === const double = function(idx+1){ console.log(idx+1*2) }

repeat(5,double) // 변수 double에 저장된 함수를 repeat의 인수로 전달해 콜백 함수로 사용

// idx + 1 === num

// double에 있는 익명함수를 다시 사용할 필요가 없는 상황이라면 익명함수를 인수에 직접 넣어도 된다

function repeat(count, callBack){
  for(let idx = 0; idx < count; idx++){
    callBack(idx + 1);
  }
}

repeat(5,function(num){
  console.log(count * 2);
}) 



// 화살표 함수
/* 
  화살표 함수는 익명함수를 매우 간결하게 작성할때 사용하는 함수 표현식의 단축 문법
  let funcA = (매개변수) => 반환값
*/

//예시
let greeting = (name) => `hello ${name}`
const greetingText = greeting('김현아');
console.log(greetingText);

//함수 본문이 여러줄일시 중괄호를 같이 사용한다
let greeting2 = (name) => {
  let greetingText = `hello ${name}`;
  return greetingText // 화살표 함수 본문에 중괄호를 사용하면 함수를 선언할 때 처럼 값을 반환해 return문 작성
}

console.log(greeting2('김현아'));


// 콜백함수로 사용할 화살표 함수

let isConfirm = true;

function confirm(onYes,onNo){
  if(isConfirm) onYes();
  else onNo();
};

confirm(
  () => console.log('승인'), //매개변수 onYes
  () => console.log('거부') //매개변수 onNo
);
