// date 객체와 날짜
/* 
  자바스크립트에는 시간을 표현하는 Date 객체가 있습니다
  배열이나 함수처럼 특수한 목적을 수행하기 위해 기능이 추가된 객체이며 Date 객체는 날짜와 시간을 저장하고 메서드도 함께 제공한다
*/

// Date 객체 생성하기
/* 
  Date 객체는 다른 객체와 달리 리터럴 문법이 아닌 생성자 문법으로만 만들 수 있다.
  Date 객체는 다음과 같이 new 키워드로 생성된다
*/

let date = new Date();
console.log(date); //생성자인 Date에 아무런 인수도 전달하지 않으면 생성 당시의 시간 즉 현재의 날짜와 시간이 저장된 Date를 반환한다

/* 
  생성자란

  자바스크립트의 생성자는 객체를 생성하는 함수이다
  Date 객체는 리터럴이 아닌 생성자로 만들고 생성자 객체를 만들때 특정 시간 등의 정보를 인수로 전달하면 객체를 생성함과 동시에 초기화 할 수 있다.
*/



// Date 객체와 협정 세계시(UTC)
/* 
  자바스크립트는 전 세계 프로그래머가 공용으로 사용하는 언어이기때문에 Date 객체는 특정 지역과 시간대에 맞게 동작하지 않고
  협정 세계시라고 부르는 UTC 기준으로 작동
*/


// 협정세계시
/* 
  협정 세계시는 시간의 시작을 1970년 1월 1일 0시 0분 0초를 기준으로 하며 이 시작 시간을 UTC+0시라고 표현합니다

  자바스크립트에서는 Date 객체를 타입스탬프를 기준으로 특정시간으로 저장하고 수정하는 기능이 있다
*/

// 타임 스탬프
/* 
  타임 스탬프란 UTC+0시인 1970년 첫날을 기점으로 흘러간 밀리초의 시간을 의미한다.

  따라서 Date 객체를 생성할때 생성자에 인수로 0을 전달하면 UTC+0시를 기준으로 0밀리초 후의 시간을 Date 객체로 생성해 반환한다
*/

let Jan01_1970 = new Date(0);

console.log(Jan01_1970);

// 한국 표준시는 UTC+09:00로 표현


// Date 객체 생성자에 하루 24시간에 해당하는 밀리초를 인수로 전달하면 UTC+0시에서 하루가 지난 값을 반환
let Jan02_1970 = new Date(24*3600*1000);
console.log(Jan02_1970);




// 원하는 날짜로 Date 객체 생성하기


// 문자열로 특정날짜전달하기
/* 
  문자열로 표현된 날짜를 인수로 전하면 해당 날짜를 기준으로 Date 객체를 만들어서 반환
*/

let date1 = new Date("2000-10-10/00:00:00:00")
let date2 = new Date("2000.10.10/00:00:00:00")
let date3 = new Date("2000/10/10/00:00:00:00")
let date4 = new Date("2000 10 10/00:00:00:00")

console.log("1:",date1);
console.log("2:",date2);
console.log("3:",date3);
console.log("4:",date4);



// 숫자로 특정 날짜 전달하기
/* 
  밀리초가 아니라 year month date hours minutes seconds milliseconds 순서로 날짜와 시간에 해당되는 숫자를 전달해
  원하는 객체를 생성할 수 있다
*/

let date5 = new Date(2000,10,10,0,0,0,0);
let date6 = new Date(2000,9,10);

console.log(date5);
console.log(date6);




// 타임 스탬프로 날짜 생성하기
/* 
  타임 스탬프는 숫자로 표현되어있기때문에 문자열이나 객체보다 저장 공간을 훨씬 적게 차지하여 빠른 비교와 탐색이 가능하다
  데이터베이스에서 날짜와 시간을 저장할때는 스탬프 형태로 저장한다
*/

let date7 = new Date(2000,9,10);
let timeStamp = date7.getTime(); //getTime() 메서드는 객체의 저장된 날짜를 타임 스탬프로 반환한다
console.log(timeStamp);

let dateClone = new Date(timeStamp);
console.log(dateClone);



// Date 객체에서 날짜 요소 얻기
/* 
  날짜 요소란 연 월 일 시간 분 초처럼 날짜를 구성하는 개별요소이다
*/


// getFullYear : Date 객체 내에서 네 자릿수의 년도를 반환
let year = new Date();
console.log(year.getFullYear()); // 2023

/* 
  이전에는 연도를 얻기 위해 getYear를 사용했으나 최신 자바스크립트 문법에서는 사용하지 않는다
*/


// getMonth : 0에서 11로 표현되는 월을 반환한다
/* 
  월을 0부터 11로 반환하면서 표기는 1부터 12로 해야하므로 각별하게 주의한다
*/

let month = new Date();
console.log(month.getMonth()); //5 지금은 6월


// getDate: 일을 반환함

let dateGet = new Date();
console.log(dateGet.getDate()); // 15 지금 15일



// getDay: 0부터 6까지 요일을 반환 0은 항상 일요일이며 1은 월요일 6은 토요일
let day = new Date();
console.log(day);



// getHours, getMinutes, getSeconds, getMilliseconds
// 각각 시간 분 초 밀리초를 반환하는 메서드입니다

let time = new Date();
console.log(time.getHours()); //  23
console.log(time.getMinutes()); // 41
console.log(time.getSeconds()); // 45
console.log(time.getMilliseconds()); // 228




// Date 객체의 날짜 요소 수정하기
/* 
  Date 객체에는 저장된 날짜 요소를 개별적으로 수정할 수 있는 메서드가 있다
*/




let udateDate = new Date(2000,9,20);

udateDate.setFullYear(2021); // setFullYear : 년도를 수정할때 사용하는 메서드
udateDate.setMonth(7); // setMonth : 객체의 월을 수정하는 메서드
udateDate.setDate(5); // setDate: 객체의 일을 수정하는 메서드
udateDate.setHours(10); // setHours: 객체의 시를 수정하는 메서드
udateDate.setMinutes(1); // setMinutes: 객체의 분을 수정하는 메서도
udateDate.setSeconds(5); // setSeconds: 객체의 초를 수정하는 메서드

console.log(udateDate); 


console.log('경계');


// Date 객체 출력하기
/* 
  현재 저장된 시간을 다양한 문자열로 반환하는 메서드
*/

const today = new Date();

console.log(today.toString()); //toString: 현재 저장된 시간을 문자열로 반환                 Thu Jun 15 2023 23:59:39 GMT+0900 (대한민국 표준시)
console.log(today.toDateString()); //toDateString: 시간을 제외하고 현재의 날짜만 출력       Thu Jun 15 2023
console.log(today.toLocaleString()); //toLocaleString: 현지화 된 날짜와 시간을 반환         2023. 6. 15. 오후 11:59:39
console.log(today.toLocaleDateString()); //toLocaleDateString: 현지화 된 날짜를 반환        2023. 6. 15.





// Date 객체 응용하기

/* 
  n월씩 이동하기
  오늘 날 캘린더 서비스는 월 단위로 달력을 이동할 수 있는 기능을 제공하는데 Date객체를 응용해 날짜를 n월씩 이동하는 기능을 구현한다  
*/

datemove = new Date();

function moveMonth(datemove, moveMonth){ // 함수 moveMonth에 Date 객체랑 이동할 월인 moveMonth 두개의 매개변수 설정
  const curTimetamp = datemove.getTime(); // 매개변수 date에 저장된 Date 객체의 타임스탬프(971136000000)를 curTimetamp 변수에 저장
  const curMonth = datemove.getMonth();  
  // 매개변수 date에 저장된 Date 객체에서 "9"을 곧 10월 다시말해 "현재월"을 구해 변수 curMonth에 저장

  const resDate = new Date(curTimetamp);
    // 변수 resDate를 만들고 새로운 Date객체를 생성 인수로 만들어놓은 타임스탬프 전달
    // 초기값으로 datemove와 동일한 날짜와 시간을 가진 Date객체가 됐으므로 setMonth 사용가능

  resDate.setMonth(curMonth + moveMonth); //변수 resDate에 저장된 Date 객체에서 setMoth를 호출해 기존 월에 moveMonth만큼 더 한월을 새로운 월로 저장
  // setMonth는 월을 변경하는 메서드로 매개변수로 넘겨진 값에 따라 월이 변경
  return resDate
}

  

const dateA = new Date("2000-10-10");
console.log("a:", dateA);

const dateB = moveMonth(dateA, 1);
console.log('B:',dateB);

const dateC = moveMonth(dateA, -1);
console.log('c:', dateC);


console.log('아 너무 힘들어 이게 뭐라고 힘들어');


// 배열에서 이번 달에 해당하는 날짜만 필터링하기
/* 
  여러개의 Date 객체를 저장하고 있는 배열에서 이번 달에 해당하는 Date 객체만 필터링해
  새 배열로 만들겠습니다
*/

let pivotDate = new Date(); 

function filterThisMonth(pivotDate,dateArray){ // 함수 filterThisMonth의 매개변수
  // dateArray : 하단에 있는 객체 pivotDate: 필터링할 월이 있는 Date 객체
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();
    
    const startDay = new Date(year,month,1,0,0,0,0); //이번달의 가장 빠른 시간은 1일 0시 0분 0초
    const endDay = new Date(year, month + 1, 0, 23, 59, 59) // 늦은 시간은 다음달 0일의 23시 59분 59초 

    const resArr = dateArray.filter((it) =>  // filter메서드를 이용해 dateArray 에서 이번달에 속하는 요소만 필터링
        startDay.getTime() <=  //date 객체를 비교할땐 getTime 멤서드로 타임스탬프 기준으로 비교
        it.getTime() && it.getTime() <= endDay.getTime()
    );

    return resArr;
}

const dateArray = [
  new Date("2000-10-1"),
  new Date("2000-10-31"),
  new Date("2000-11-1"),
  new Date("2000-9-30"),
  new Date("1900-10-11")
];

const today2 = new Date("2000-10-10 / 00:00:00");
const filterArray = filterThisMonth(today, dateArray);

console.log(filterArray);
