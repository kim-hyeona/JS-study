/* 
  유틸리티 타입:
  제네릭,맵드 타입, 조건부 타입등의 타입 조작 기능을 이용해
  실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
*/


/* 예시 1
Readonly<T> */

interface Person {
    name: string;
    age: number;
};

const person: Readonly<Person> = {
    name: "김현아",
    age: 25,
};

// person.name =""; //읽기 전용 속성이므로 name에 할당 할 수 없음



/* 예시 2
Partial<T> */

interface Person {
  name: string;
  age: number;
}

const person1: Partial<Person> = {
  name: "김현아",
};


