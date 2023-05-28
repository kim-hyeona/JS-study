/* 
  타입 단언
*/

type Person = {
  name: string;
  age: number;
}

let person = {} as Person //타입단언 type assertion
person.name = "김현아"
person.age = 27



type Dog = {
  name: string;
  color: string;
};

let dog : Dog = {
  name: "잭슨이",
  color: "하얀색",
  breed: "비숑", //추가프로퍼티 허용안함 그런데 넣어야하는 상황이라면 타입단언을 이용한다
}as Dog;


// 타입 단언의 규칙

/* 
  타입 단언의 규칙
  값 as 단언 <= 단언식
  A가 B의 슈퍼타입이거나
  A가 B의 서브타입이어야 함
*/

let num1 = 10 as never; //never는 모든 타입의 서브타입 10가 never의 슈퍼 타입이기때문에 가능
let num2 = 10 as unknown; // unknown은 전체 집합 타입이기때문에 10이 unknown의 서브타입이기에 가능

let num3 = 10 as string; 
let num4 = 10 as unknown as string


// const 단언

let num5 = 10 as const;

let cat = {
  name: "야옹이",
  color: "gray"
} as const; // 이렇게 작성하면 모든 프로퍼티가 읽기전용으로 추출됨 



// Non Null 단언
// 어떤 값이 Null이거나 Undefinde가 아니라고 알려주는 문법 

type Post = {
  title: string;
  author?: string;
};

let post :Post = {
  title:"게시글1",
  author: "김현아"
}

// "?"란 자바스크립트에서 제공하는 옵셔널체이닝
const len : number = post.author?.length;

const len2 : number = post.author!.length; //"!"이란 Null이나 Undefinde가 아니라고 정해놓음



// 위험한 문법들이니까 확실할때만 사용할것