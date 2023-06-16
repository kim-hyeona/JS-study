// 배열과 메서드
/* 
  배열: 일반 객체에 기능을 추가해 만든 특수한 객체
*/

// 요소의 추가 및 삭제 메서드

// push: 배열 맨끝에 요소를 추가하고 새로운 길이를 반환하는 메서드

let food = ["짜장면","치킨","타코야끼"];

const newLength = food.push("피자");

console.log(food); // ["짜장면","치킨","타코야끼","피자"]
console.log(`새롭게 생성된 배열의 길이 ${newLength}`);



// pop: 배열의 맨 끝 요소를 제거하고 제거한 요소를 반환하는 메서드

food.pop();
console.log(food);

// 빈 배열에서 pop을 사용하면 제거할 요소가 없기때문에 undefined 반환



// shift: pop메서드와 반대로 배열의 맨 앞 요소를 제거하고 제거한 요소를 반환

let removedItem = food.shift();
console.log(food); // 치킨 타코야끼
console.log(removedItem); // 짜장면


// unshift: 배열 맨 앞에 요소를 추가하고 새 배열의 길이를 반환

food.unshift("삼겹살");
console.log(food);

/* 
  배열은 여러 요소를 순서대로 저장하는 자료구조이며 0부터 시작하는 인덱스로 배열요소에 접근
  그러므로 인덱스요소를 뒤로 한칸씩 밀고 당기며 변경을 주는 shift와 unshift는 성능이 좋지 않고 느리다
*/



// slice: 기존 배열에서 특정 범위를 잘라 새로운 배열을 반환한다 이때 원본의 배열은 수정이 되지 않는다

const arr = [1,2,3,4];

const sliced = arr.slice(0,2); // slice(start,end)

console.log(arr); // [ 1, 2, 3, 4 ] <= 기존의 배열은 수정되지 않음
console.log(sliced); //[ 1, 2 ]

/* 
  음수값을 인덱스로 전달해도 된다 end없이 start만 음수 인덱스로 전달하면
  배열 맨 끝부터 전달한 음수의 절댓값만큼 잘라낸 새 배열을 반환함
*/



// concat : 서로 다른 배열은 이어 붙여 새 배열은 반환하는 메서드이다

let arrA = [1,2];
let arrB = [3,4];
let arrC = arrA.concat(arrB);

console.log(arrC); // [ 1, 2, 3, 4 ]

// 배열이 아닌 객체도 전달가능

let arrD = {a: 1, b: 2};
let arrE = arrC.concat(arrD);

console.log(arrE); //[ 1, 2, 3, 4, { a: 1, b: 2 } ]




// 순회 메서드 forEach 일반적으로 배열을 순회할때는 반복문을 많이 이용하나 자바스크립트는 배열 순회 메서드도 제공하고 있다

/* 
  문법

  function cb(item,index,array){
  // ...작업
  }

  arr.forEach(cb)
*/

/* 
  forEach는 인수로 함수를 요구하는 메서드이다 함수 호출 과정에서 인수로 전달되는 함수를 콜백함수라고 하는데
  forEach메서드는 배열 요소 가각을 순회하면서 인수로 전달한 콜백 함수가 정의한대로 요소를 동작시킨다

  이 콜백 함수에는 3개의 매개변수가 제공된다
  item: 현재 순회하는 배열 요소
  index: 현재 순회하는 배열 요소의 인덱스
  array: 순회중인 배열
*/

function cb(item,idx){
    console.log(`${idx}번째 요소 ${item}`);
    /*
      0번째 요소 1
      1번째 요소 2
      2번째 요소 3
    */
}
const arrEach = [1,2,3];

arrEach.forEach(cb); // 배열 arrEach에서 forEach메서드 호출하고 인수로 함수 cd를 전달


/* 
화살표 함수로 표현

const arr = [1,2,3];
arr.forEach((item,idx) => {
  console.log(`${idx}번째 요소 ${item}`)
})
*/



// 탐색 메서드
/* 
  배열탐색이란 배열에서 특정 조건을 만족하는 요소를 찾아내는 작업
  탐색 메서드를 활용하면 간단하게 배열에서 특정 요소를 검색할 수 있음
*/



// indexOf : 배열에서 찾으려는 요소의 인덱스를 반환하는 메서드
// arr.indexOf(item,formIndex);
// item: 찾으려는 요솟값 formIndex: 탐색을 시작할 인덱스 번호

let indexOfArr = [1,3,5,7,1];

console.log(indexOfArr.indexOf(1,0)); // 0
// 찾으려는 값 1 / 탐색을 시작할 인덱스 번호 0 이므로 찾으려는 값이 0번째 인덱스에 위치해서 0출력


/* 
두번째 인수는 생략할 수 있다 생략하면 배열의 0번째 인덱스부터 탐색한다
또한 음수로 지정가능하며 배열의 맨 뒤에서부터 시작

찾으려는 요소가 배열 내에 없으면 -1를 반환한다.
두번째 인수의 값이 배열의 길이보다 같거나 큰 경우에도 -1을 반환한다

indexOf는 엄격한 비교연산자로 요소를 비교하므로 자료형이 다르면 다른 값으로 평가한다
엄격한 비교를 하기때문에 객체 자료형은 탐색할 수 없다 객체 자료형은 값을 비교하는게 아니라 참좃값을 비교하기 때문이다
*/



// includes: 배열에 특정 요소가 있는지 판별한다
// 문법: arr.includes(item,fromIndex)

let includesArr = [1,3,4,5,7,1];

console.log(includesArr.includes(3)); //true
console.log(includesArr.includes("생선")); //false

/* 
  includes 메서드는 인수로 전달한 요소가 배열에 존재하면 true 아니면 false를 반환한다
*/




// findIndex : 배열에서 찾으려는 요소의 인덱스 번호를 찾아 반환한다
// 문법: arr.findIndex(callback(item,index,array));
/* 
  findIndex는 인수로 콜백함수를 전달하는데 그 함수를 판별함수라고 한다
  배열에서 판별 함수를 만족하는 첫번째 요소의 인덱스번호를 반환하고
  그런 요소가 없다면 -1을 반환한다
  판별 함수에는 3개의 매개변수가 제공된다
  현재 요소: item
  현재 인덱스: index
  탐색대상배열: array
*/

function detetmine(item,idx,deteaArr){ 
    if(item % 2 === 0){ // detetmine은 item이 짝수면 true 홀수면 false를 반환
      return true;
    }else {
      return false;
    }
}

let deteaArr = [1,3,5,1,2];
let index = deteaArr.findIndex(detetmine); // 메서드를 호출하고 인수 판별 함수 detetmine를 전달

console.log(index); //4
/* 
  배열 deteaArr에서 처음으로 짝수가 나오는 인덱스번호 4를 반환
*/

/* 
  화살표 함수로 표현
  let deteaArr = [1,3,5,1,2];

  let index = arr.findIndex((item) => 
  item % 2 === 0 ? true : false
)

실무에서 화살표 함수와 삼항 연산자를 이용해 함수를 간결하게 적는 경우가 많으니 익숙해질것
*/

let nameArr = [
  {name:"김현아"},
  {name:"송다혜"},
  {name:"이은정"},
  {name:"최재준"},
];

let indexName = arr.findIndex((item) => item.name === "김현아");
console.log(indexName);




// find : 인수로 판별 함수를 전달하고 배열에서 이를 만족하는 요소를 찾는다 인덱스가 아닌 요소를 반환

let posArr = [
  {position:"프론트엔드 개발자"},
  {position:"백엔드 개발자"},
  {position:"디자이너"},
  {position:"프로덕트 매니저"},
];

let posElement = arr.find((item) => item.name === "디자이너");
console.log(posElement);




// filter : 배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환하는 메서드
// arr.filter(callback(item,index,array))

let comment = [
  {id:"슬픈 개발자",content:"이거 왜 이렇게 짬" },
  {id:"화난 개발자",content:"그럼 니가 하세요" },
  {id:"우울한 개발자",content:"싸우지말라고" },
  {id:"슬픈 개발자",content:"죄송합니다~"}
]

let filterArr = comment.filter((item) => item.id === "슬픈 개발자");

console.log(filterArr);
/* 
[
  { id: '슬픈 개발자', content: '이거 왜 이렇게 짬' },
  { id: '슬픈 개발자', content: '죄송합니다~' }
]
*/






// 변형 메서드
/* 
  배열을 변형하거나 요소를 재정렬하는 메서드인 배열 변형 메서드
*/


// map
/* 
  map은 배열 각각의 요소에 대한 함수 호출 결과를 모아 새 배열을 만들어 반환하는 메서드이다
  arr.map(callback(item,index,array))

  map 메서드는 콜백함수를 인수로 전달한다 이 콜백 함수에는 현재 요소 item / 인덱스 index / map을 호출할 배열이 매개변수로 제공된다 
*/

let mapArr = [1,2,3,4]
let newArr = arr.map((item)=> item*3);

console.log(newArr);


// map 메서드로 객체를 저장하는 배열을 다른 형태로 구성하기

let friendArr = [
  {name:"김수연", hobby:"뮤지컬감상"},
  {name:"이유나", hobby:"먹스타그램"},
  {name:"나하늘", hobby:"여행"},
  {name:"박예솔", hobby:"게임"}
]

let newFriendArr = friendArr.map((item) => item.name)
console.log(newFriendArr);




// sort
/* 
  배열의 요소를 정렬할때 사용하는 메서드
  arr.sort(compare(a,b))

  sort메서드에서 하나의 콜백 함수를 인수로 전달합니다. 이 함수는 비교 함수로 사용되고 필수 사항은 아님
  비교 함수를 생략하면 사전순, 오른차 순으로 정렬함

  정렬된 새로운 배열을 반환하는게 아니라 기존에 있던 배열을 정렬해줌
*/

let sortArr = ["옥수수","감자","고구마","당근"];

sortArr.sort();
console.log(sortArr); // 오 한글도 되는구나

/* 
sort 메서드는 기본적으로 요소를 문자열로 취급해 사전순으로 전환하기때문에
숫자를 정렬하려면 비교함수를 사용해야한다
*/

function compare(a,b){
  if(a > b){ // a가 b보다 클때 양수 1을 반환하며 a는 b의 뒤로간다
    return 1;
  } else if(a < b){ // b보다 a가 작을때 음수 -1을 반환하며 a는 b의 앞으로 간다
    return -1
  } else { //b와 a가 같을때 0을 반환하며 자리를 바꾸지 않는다
    return 0;
  }
};

let sortNum = [10,2,7,9];
sortNum.sort(compare);

console.log(sortNum);



// join : 배열 요소를 모두 연결해 하나의 문자열로 반환
/* 
join 메서드에서 분리 기호를 사용되는 구분자를 인수로 전달하는데 이것은 필수 사항은 아니다
구분자는 배열 요소를 합칠때 각각의 요소를 구분하는 문자열이고 콤마를 기본값으로 제공한다

arr.join(separator)
*/


let joinArr = ["자바스크립트","너무","넓고","크다"];

console.log(joinArr.join()); // 자바스크립트,너무,넓고,크다
console.log(joinArr.join("-")); //자바스크립트-너무-넓고-크다




// reduce : 배열요소를 모두 순회하면서 인수로 제공한 함수를 실행하고 단 하나의 결과값만 반환하는 메서드이다
/* 
  arr.reduce((acc,item,index,array) => {
    (...)
  },initial);

  호출할때 두개의 인수를 전달하는데 첫번째 인수로 콜백함수 두번째 인수로는 initial 초기값을 전달한다
  reduce 메서드의 첫번째 콜백함수는 특별히 리듀서라고 부르고 리듀서 함수는 map이나 forEach 메서가 전달하는 콜백함수처럼
  배열의 모든 요소에 대해 각각 실행되는데 4개의 매개변수를 제공받는다

  acc: 이전 함수의 호출 결과를 저장 reduce 메서드의 두번째 인수인 initial이 acc의 초기값이 된다
  item: 현재의 배열 요소
  index:현재의 배열 인덱스
  array: reduce메서드를 호출할 배열

  acc의 초깃값인 initial은 필수사항은 아니며 전달하지 않으면 배열의 첫번째 요소가 acc의 초기값이 된다
  
  reduce 메서드를 이용하면 코드 한줄로 배열의 모든 요소의 누적값을 구할 수 있다
*/

let reduceArr = [1,2,3,4,5];

let result = reduceArr.reduce((acc,item) => acc + item,0);
console.log(result); // 15

/* 
  initial로 0을 전달했으니 acc의 초기값은 0이다. 
  첫번째 배열 요소인 item의 값은 1이므로 acc + item = 0 + 1

  acc는 반복 리듀서 함수가 반환한 결과인 0+1이 됐고 item은 다음 배열의 값인 2가 되어 0+1+2를 반환

  5까지 반복하여 15 출력
*/


