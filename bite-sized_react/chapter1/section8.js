// 객체
/* 
  객체는 숫자형이나 문자형과 같은 원시 자료형과 달리
  다양한 값을 담는 자료형을 말한다
*/


// 객체생성과 프로퍼티
/* 
  자바스크립트에서는 2가지 방법으로 객체를 생성할 수가 있는데
  다음과 같이 리터럴 또는 생성자 문법을 사용한다.
*/

let objA = {} //객체리터럴
let objB = new Object(); //객체생성자

//빈 객체가 아닌 데이터가 있는 객체를 생성하려면 다음과 같이 key와 value 쌍으로 이루워진 프로퍼티를 작성한다

let person = {
  name: "김현아", // key: name value:"김현아" 인 프로퍼티
  age: 25, // key: age value는 25인 프로퍼티
  "like cat": true 
}

/* 
  프로퍼티는 속성이라는 뜻으로 객체를 설명하는 정보입니다.
  객체는 프로퍼티를 여러개 가질 수 있으며 각각 콤마로 구분
  프로퍼티의 key는 문자형을 사용하며 중복할 수 없다.
  key는 중복해도 오류가 발생하지 않으나 중복되면 객체에는 마지막에 작성한 프로퍼티만 남게됨

  key가 name인 프로퍼티는 name프로퍼티라고 부르고 
  복수의 단어로 이루워진 key값을 사용하려면 따옴표로 묶어주면 된다
*/

// 객체 프로퍼티 다루기
/* 
  객체는 key와 value로 이루워진 프로퍼티의 모음이다
  프로퍼티를 찾고 추가하고 삭제하는 등의 연산은 key를 통해 수행한다
*/

// 프로퍼티 접근

let dog = {
  name:"잭슨",
  age:9,
  "like human":false
};

const dogName = dog.name; // 점표기법
const dogAge = dog["age"]; // 괄호 표기법

console.log(dogName); // 잭슨
console.log(dogAge); // 9


// 프로퍼티 추가

dog.gender = "m";
console.log(dog.gender);

dog["cute"] = true
console.log(dog["cute"]);

/* 
  추가하려는 프로퍼티의 key가 고정적이라면 점표기법을
  key가 변수에 저장된 값처럼 유동적이라면 괄호표기법을 이용함
*/


// key와 value가 유동적인 프로퍼티를 괄호 표기법으로 객체에 추가

function addProperty(obj,key,value){
  obj[key] = value; // 함수 addProperty는 매개변수에 저장한 객체 obj key value를 이용해 괄호표기법으로 새 프로퍼티 추가
}

let obj = {}

addProperty(obj,"a",1); // 함수 addProperty를 호출하고 인수로 obj와 key value값을 각각 전달
addProperty(obj,"b",2);
addProperty(obj,"c",3);

console.log(obj);



// 프로퍼티 수정

let puppy = {
  name: "찰스",
  age: 7,
  food:false
};

puppy.age = 8;
puppy["food"] = true

console.log(puppy);


// 프로퍼티 삭제

delete puppy.age;
delete puppy.food;

console.log(puppy);


// 상수 객체의 프로퍼티또한 객체 자체를 없애지 않는 한 프로퍼티를 자유롭게 추가 삭제 수정할 수 있다.



// in연산자

// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined출력
let objIn = {
  a: 1
};

console.log(objIn.b); // undefined
// 이러한 객체의 특징을 이용해 특정 프로퍼티의 존재를 알 수 있음


let isNameExist = "name" in objIn;
console.log(isNameExist); // false
// 존재하지 않으므로 false 출력



// 메서드 : 객체에서 값이 함수인 프로퍼티를 메서드라고 한다
let cutie = {
    name: "잭슨",
    sayHi : function(){
      console.log('안녕');
    }
};

person.sayHi(); 

/* 
  객체 person의 sayHi 프로퍼티는 value가 곧 함수입니다
  메서드는 데이터가 아니라 동작을 정의합니다.
*/