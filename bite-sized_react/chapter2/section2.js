// 단락평가
/* 
  true || false와 같은 비교식은 첫번째 피연산자의 값이 true이므로 결과값은 true이다
  false && true와 같은 식은 첫번째 피연산자 값이 false이므로 false이다

  이런식으로 논리 연산에서 첫번째 피연산자 값만으로도 해당결과가 확실할때 두번째 값을 평가하지 않는걸
  :단락평가
  라고 한다 다른 표현으로는 "지름길 평가"라고도 한다
*/

// and 단락평가
/* 
  AND를 의미하는 && 연산자는 피연산자의 값이 하나라도 거짓이면 거짓을 반환합니다
  따라서 왼족에 위치한 첫번째 피연산자의 값이 false면 단락평가가 이루어지므로 두번째 피연산자는 계산하지 않습니다
*/

function calaA(){
  console.log('a');
  return false
};

function calaB(){ // 호출하지 않음
  console.log('b');
  return true
};

console.log(calaA() && calaB()); // calaA가 이미 false이므로 calaB는 호출하지 않음


// and 단락평가를 이용해 오류 방지하기

function calaA(){
  console.log('a');
  return undefined;
};

function calaB(){ 
  console.log('b');
  return true
};

console.log(calaA() && calaB()); // a와 undefined를 출력
/* 
  and논리 연산자의 결과가 true나 false가 아니라 undefined인 이유는 논리 연산에 참여한 피연산자의 값이 불리언이 아니기때문이다

  and나 or 논리 연산은 피연산자의 값이 truthy 또는 falsy하면 해당값을 그대로 반환한다

  함수 calaA가 falsy한 값인 undefined를 반환하므로 이 값이 그대로 논리 연산의 결과값이 된다
*/



// 이러한 특성을 이용하여 오류 방지하기

/* 
      function getName(person){
          return person.name; //함수 getName은 매개변수 person의 name 프로퍼티 값을 반환
      }

      let person; //undefined
      let name = getName(person); // 함수 getName을 호출하고 인수로 person을 전달 

      console.log(name);

      // error TypeError: undefined에서 프로퍼티를 읽을 수 없다.
 */


/* 
    function getName(person){
      if(person !== undefined){ // 매개변수 person의 값이 undefined가 아닐때만 name 프로퍼티에 접근합니다
        return person.name;
      } else{
        return "매개변수가 객체가 아닙니다"
      }
    }

    let person;
    let name = getName(person);

    console.log(name); // 매개변수가 객체가 아닙니다

    // 함수 getName에 전달하는 인수가 null일때도 오류가 발생할 수 있는 상황 
*/

function getName(person){
    if(person !== undefined && person !== null ){
        return person.name;
    } else {
      return "매개변수가 객체가 아닙니다";
    }
}

let person;
let name = getName(person);

console.log(name); // 매개변수가 객체가 아닙니다

// 문제는 해결되었으나 자바스크립트로 프로그래밍을 할때는 객체를 매개변수에 저장해놓는 일이 많다보니 조건문은 비효율적이다
// 이런 상황에서 단락평가를 이용하면 이 문제를 쉽게 해결할 수 있다

function getName(person2){
    return person2 && person2.name; //AND를 의미하는 && 연산자는 피연산자의 값이 하나라도 거짓이면 거짓을 반환합니다
}

let person2 = {name: "현아"};
let name1 = getName(undefined);
let name2 = getName(null);
let name3 = getName(person2);

console.log(name1); // undefined
console.log(name2); // null
console.log(name3); // 현아

/* 
  getName의 매개변수 person2이 undefied,null과같이 falsy한 값이라면 person.name을 계산하지 않으므로 오류가 발생하지 않음
*/




// or 단락평가
/* 
  or를 의미하는 || 연산자는 피연산자의 값이 하나라도 참이면 참을 반환한다
  따라서 왼쪽에 있는 첫번째 피연산자의 값이 true면 단락평가가 이루워져 두번째 피연산자 값은 계산하지 않는다.
*/

function calaOrA(){
  console.log('a');
  return true;
}

function calaOrB(){
  console.log('b');
  return false;
}

console.log(calcOrA() || calaOrB());


const devName = "김현아" || undefined;

console.log(devName); //김현아

// "김현아"는 trythy한 값이므로 두번째 피연산자는 계산하지 않는다.




// OR 단락평과와 null의 병합 연산자

const varA = 0;
const varB = "김현아";

const resultA = varA || varB;
const resultB = varA ?? varB;
/* 
  null 병합 연산자
  값이 확정된 변수를 찾을 때 사용하는 연산자
*/

console.log(resultA); // 김현아
// varA는 falsy한 값 varB는 truthy한 값이기 때문에 || 연산의 결과 varB의 값인 김현아를 resultA에 저장합니다

console.log(resultB); // 0
// varA와 varB에서 첫번째로 확정된 값은 varA의 0입니다 따라서 이 값을 resultB에 저장합니다.


/* 
  or의 단락 평가는 null의 병합 연산자와 유사한듯 보이지만 혼동해서는 안된다
  null 병합 연산자는 값이 null이거나 undefined가 아닌 확정된 피연산자를 찾기에
  or 연산자는 엄밀히 다른 동작을 수행한다.
*/


