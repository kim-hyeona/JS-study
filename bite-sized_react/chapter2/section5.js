// 구조분해할당
/* 
  구조분해할당은 말 뜻 그대로 구조를 분해해 할당한다는 문법이다
  배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담을 때 사용
*/


// 배열의 구조분해 할당

// 배열에서 값을 하나씩 변수에 할당하는 예시
let arr = [1,2,3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one,two,three); //1 2 3

// 구조분해할당을 사용한 예시

let [DAone,DAtwo,DAthree] = arr;

console.log(DAone,DAtwo,DAthree); // 1,2,3



// 3개의 요소로 이루어진 배열에서 0과 1번 인덱스의 요소만 구조분해할당해 변수에 저장

let arr2 = [1,2,3];
let [one1, two2] = arr2

console.log(one1, two2); // 1 2

/* 
  배열의 길이와 할당할 변수의 개수가 일치하지 않아도 오류가 발생하지 않습니다.
  배열의 구조분해할당에서는 대괄호 속에서 선언한 변수만큼 순서대로 할당할 뿐입니다
  
  배열의 길이보다 할당한 변수의 개수가 많은 경우에는 undefined를 남는 변수에 할당합니다.
*/


// 객체의 구조분해할당

let dev = {
  name:"김현아",
  age: 25,
  location:"경기도"
}

let {name,age,location} = dev;
console.log(name,age,location);//김현아 25 경기도



// 함수의 매개변수가 객체일때 구조분해할당하기

function func({name:n,age:a,hobby:h}){
  console.log(n ,a ,h );
}

let person = {
  name:'김현아',
  age:'age',
  hobby:'경기도'
}

func(person);