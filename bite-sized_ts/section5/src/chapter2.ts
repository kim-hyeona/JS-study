/* 
  선언 합침
*/

interface Person {
  name: string;
};

interface Person {
  age: number;
  // name: number; 인터페이스 충돌은 허용되지않음
};

/* 
타입별칭과 다르게 interface는 동일한 이름으로 선언해도
오류메세지가 뜨지않고 하나로 합쳐진다
 */

interface Devloper extends Person {
  name: 'hello'; // 이건 충돌이 아니라 확장이라서 괜찮다
}

const person: Person = {
  name: "",
  age: 27,
};


/* 
  선언 합침으로 모듈 보강
*/

interface Lib {
  a: number;
  b: number;
}

interface Lib { //모듈보강 작업
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello"
}