/* 
  인터페이스
*/

interface IPerson {
  readonly name: string; //읽기전용프로퍼티
  age?: number; //선택적 프로퍼티로 설정
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a:number, b:number): void;
  // 메서드의 오버로딩을 구현하고 싶다면 호출시그니처를 사용
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person : IPerson = {
  name:"김현아",
  // age: 25,/* why */
  sayHi: function(){
    console.log('hi');
  },
};

person.sayHi();
person.sayHi(1,2);