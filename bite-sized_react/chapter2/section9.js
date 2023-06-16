// 비동기처리
/* 
  비동기처리를 이용하면 오래 걸리는 작업이 종료될때까지 기다리지 않고
  다음 작업을 수행하는 등 유연한 프로그래밍이 가능하다
*/


// 동기와 비동기
/* 
  자바스크립트 코드는 기본적으로 작성한 순서에 따라서 위에서 아래로 순차적으로 실행된다. 
  순차적으로 코드를 실행하는 것을 동기(Synchronous)라고 한다
  동기는 앞의 작업을 완료해야 다음 작업을 실행할 수 있고
  동기적으로 동작하는 코드는 작성된 순서에 다라 작업이 진행되므로 작업의 흐름을 파악하기 쉽다.

  그러나 오래 걸리는 작업을 빨리 끝날 작업보다 먼저 실행하게 되면 지연문제가 생긴다
*/

function longTask(){
    // 10초 이상 걸리는 작업
}

function shortTask(){
    // 매우 빠르게 끝나는 작업
}

longTask()
shortTask()

/* 
  shortTask 함수는 빨리 끝나는 작업이지만 longTask가 완료되어야 실행할 수 있기에
  진행할 모든 작업의 속도는 전체적으로 느려질 수 밖에 없다

  이러한 문제를 해결하려면 앞에 작업과 상관없이 독립적으로 동작하게 만드는 것을 비동기(Asynchronous)라고 한다
*/


// setTimeout() 함수
/* 
  setTimeout은 비동기적으로 동작하는 함수로 종료될때까지 기다리지않고 바로 다음 코드를 실행할 수 있다
*/

setTimeout(function (){ // setTimeout은 두번째 인수로 전달된 시간만큼 기다린 다음에 첫번째 인수로 전달한 콜백함수를 실행한다
  console.log('1번');
},30000); 

console.log('2번');



// 비동기적으로 동작하는 카페를 자바스크립트코드로 구현한 예시

function orderCoffee(coffee, time){
    setTimeout(() => {
      console.log(`${coffee} 제조완료`);
    },time);
}

orderCoffee('아이스 아메리카노',4000);
orderCoffee('카페 라떼',2000);
orderCoffee('바닐라 라떼',3000);

/* 
  카페라떼 제조완료
  바닐라라떼 제조완료
  아이스아메리카노 제조완료
*/


// 콜백함수로 비동기처리하기

function double(num){
  setTimeout(() => {
    const doubleNum = num * 2;
    console.log(doubleNum)
  },1000)
}

double(10);

// 위에 있는 코드을 실행하면 1초 뒤에 20이 출력된다 이때 함수 double의 결과를 리턴하고자 한다면


function double2(num){
  return setTimeout(() => {
    const doubleNum = num * 2;
    return doubleNum; // 함수 setTimeout에서 인수로 전달한 콜백함수가 변수 doubleNum을 리턴
  }, 1000)
}

const res = double2(10);

console.log(`뭐지${res}`);// 알수없는 숫자가 출력됨
/* 
  이는 반환값이 함수 setTimeout에서 인수로 전달한 콜백함수가 반환하는게 아니기때문이다
  함수 setTimeout은 타이머의 식별 번호를 반환합니다
  콘솔에는 콜백함수의 반환값이 아니라 타이머의 식별번호

  함수 setTimeout은 자바스크립트 내장 함수이며 콜백함수는 함수 setTimeout에 전달하는 인수일뿐이다
  따라서 콜백함수의 반환값과 함수 setTimeout의 반환값은 무관하다.
*/


// 콜백 함수의 인수로 2를 곱한 결과값을 전달하면 간단하게 비동기 작업의 결과값을 반환값으로 쓸 수 있다

function double3(num, cd){
  setTimeout(() => {
    const doubleNum = num * 2;
    cd(doubleNum); // 비동기 작업이 완료되면 콜백 함수를 호출해 연산의 결괏값을 인수로 전달
  },1000);
}

double3(10,(res) => { // 함수 double3을 호출하며 두번째 인수로 화살표 함수로 만든 콜백함수를 전달, 호출되면 인수로 전달된값을 콘솔에 출력
  console.log('res');
});

console.log('마지막'); // 앞서 호출한 함수 double3이 비동기 작업이므로 해당 작업의 종료를 기다리지 않고 먼저 실행됨




// 프로미스 객체를 이용해 비동기 처리하기
/* 
  Promise는 비동기 처리를 목적으로 제공되는 자바스크립트 내장 객체이다
  프로미스는 Date처럼 특수한 목적을 위해 다양한 기능을 추가한 객체이다
  프로미스를 이용하면 콜백 함수를 이용한 비동기 처리보다 더 쉽게 비동기처리를 수행할 수 있다. 

  대기상태(pending): 작업을 아직 완료하지 않았음
  성공상태(fulfilled): 작업을 성공적으로 완료함
  실패상태(rejected): 작업이 모종의 이유로 실패함

  대기상태에서 작업을 성공적으로 완료하는 것을 해결이라고 한다
  작업을 해결하면 해당 작업은 성공상태가 된다
  
  반대로 대기 상태에서 작업이 모종의 이유로 실패하는것을 거부라고 한다
  작업이 거부되면 작업은 실패 상태가 된다
*/

// const promiseVar = new Promise(); //프로미스 객체를 생성하여 상수 promisVar에 저장

/* 
  프로미스 객체를 만들때 인수로 실행함수 Ececutor를 전달한다
  실행 함수란 비동기 작업을 수행하는 함수이다
  이 함수는 프로미스 객체를 생성함과 동시에 실행되며 2개의 매개변수를 제공받는다
*/

//프로미스 객체를 생성해 간단한 실행 함수를 인수로 전달하는 예시

const promise = new Promise(
  // resolve: 비동기 작업의 상태를 성공으로 바꾸는 함수
  // reject: 비동기 작업의 상태를 실패로 바꾸는 함수

  function (resolve, reject) { // 새롭게 생성된 프로미스 객체의 실행함수 프로미스 객체를 생성함과 동시에 실행되고
    setTimeout(() => {          //매개변수 두개를 제공받음 프로미스 객체는 생성과 동시에 실행함수를 실행해 콘솔에 안녕이라고 출력
      console.log('안녕'); 
    },500);
  }
);


/* 
  프로미스는 비동기 작업의 상태를 대기,성공,실패로 나뉘어 관리한다.
  실햄 함수가 제공받는 2개의 매개변수는 대기 상태의 비동기 작업을 성공 또는 실패상태로 변경하는 역할을 한다.
*/

// resolve를 호출하여 작업상태를 성공상태로 변경하는 예시

const resolveVar = new Promise(
  function (resolve, reject){
    setTimeout(() => {
      resolve("성공") // 매개변수로 제공된 resolve를 호출해 비동기 작업의 성공을 알리며 작업의 결과값을 인수로 전달
    },500); // 0.5초 기다린 다음에 resolve를 호출해 비동기작업의 상태를 성공 상태로 변경
  }
)
/* 
  이 결과값을 비동기 작업이 아닌 곳에서 이용하려면 다음과 같이 프로미스 객체의 then 메서드를 사용한다
  then 메서드는 인수로 전달한 콜백 함수의 비동기 작업이 성공했을때 실행됩니다
*/

resolveVar.then(function(res){ // then 메서드를 호출하고 인수로 콜백함수를 전달
  console.log(res);            // 이 콜백함수는 비동기 작업이 성공했을때 즉 실행 함수가 resolve를 호출했을때 실행
})

/* 
  실행함수에서 0.5초 기다린다음 resolve를 호출하고 인수로 성공을 전달
  따라서 then 메서드에 인수로 전달한 콜백함수가 실행됨
  이때 콜백 함수의 매개변수에는 "성공" 이라는 문자열이 전달됨

  실행함수에서 reject를 호출하면 비동기 작업의 상태를 실패로 변경함
  이때 then 메서드는 실행되지 않음

  작업이 실패했을때 실행할 콜백 함수를 설정하려면 catch 메서드를 사용해야함
*/

const rejectVar = new Promise(
  function (resolve, reject){
    setTimeout(() => {
      reject("실패")
    },500)
  }
);

reject.then(function (res){
  console.log(res);
});

rejectVar.catch(function (err){ // 비동기 작업이 실패하면 catch 메서드에 인수로 전달한 콜백함수가 실행됨
  console.log(err);             // 이때 실행 함수에서 reject에 전달한 인수가 매개변수로 제공
})


/* 
  이렇듯 프로미스의 then과 catch 메서드를 이용하면 작업이 성공하거나 실패했을때 실행할 콜백함수를 별도로 설정할 수 있어
  좀 더 유연하게 비동기 작업을 처리 할 수 있습니다.
*/