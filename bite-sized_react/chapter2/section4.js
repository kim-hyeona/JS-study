// 반복문 응용하기
/* 
  반복문을 응용하면 배열과 객체에 저장한 값에 쉽게 접근할 수 있습니다.
*/

// 배열과 반복문
/* 
  배열은 순서대로 데이터를 저장하는 특성이 있다
  웹 서비스의 게시판, 피드의 게시물 등의 리스트를 생성할 때 반복문과 결합하여 자주 사용합니다.
*/



// 인덱스를 이용한 순회
/* 
  배열에는 데이터의 저장 순서를 의미하는 인덱스 번호가 있습니다.
  인덱스는 0부터 1씩 증가하며 차례대로 데이터에 접근할 수 있습니다
*/

let arr = [1,2,3,4];

for(let idx = 0; idx < arr.length; idx++){
  console.log(arr[idx]);
}

/* 
length를 이용하여 배열을 순회할때는 주의할 점은 length는 배열 길이를 반환할뿐 마지막 인덱스 번호는 반환하지 않기에
반복문의 종료 조건은 i <= arr.length가 아니라 i < arr.length로 설정해야한다
*/



//for...of 문을 이용한 순회
/* 
  프로퍼티 length를 사용하지 않고 배열을 순회하는 법
*/

let food = ["짜장면","곱창","김치찌개"];

for (let item of food){
  console.log(item);
}

// for of문은 for문과 달리 of뒤에 배열에서 요소를 하나씩 순서대로 꺼내 변수 item에 저장합니다


// Object.keys를 이용한 key 순회
// 객체 메서드인 Object.keys는 객체 프로퍼티의 key값을 배열로 반환한다

let dev = {
  name:"김현아",
  age: 25,
  location:"경기도"
}

const keyArr = Object.keys(dev); // Object.keys 메서드는 인수로 전달한 객체에서 프로퍼티의 key만 배열로 반환합니다

for(let key of keyArr){
  console.log(key);
}


// 괄호표기법을 이용해서 value값도 불러오기

const valueArr = Object.keys(dev);

for(let key of valueArr){
  let value = dev[key]; // 괄호 표기법으로 현재 key 프로퍼티의 value를 하나씩 불러옵니다
  console.log(key,value);
}



// Object.values를 이용한 value 순회
/* 
  자바스크립트에서 프로퍼터의 value만 배열로 반환하는 메서드이다
*/

let devloper = {
  name:"김현아",
  age:"25",
  hobby:"그림그리기"
};

const valueArr2 = Object.values(devloper);

for (let value of valueArr2){
  console.log(value);
}


// for in 문을 이용한 순회
/* 
  배열을 순회할때 for of 문처럼 객체를 순회할때는 for in을 사용한다
*/

for (let key in devloper){
  const value = devloper[key];
  console.log(key,value);
}



