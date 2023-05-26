// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;


// 객체 타입간의 호환성

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal : Animal = {
    name: "기린",
    color: "yellow",
};

let dog : Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
}

animal = dog;

dog = animal //오류


/* 
객체타입들은 프로퍼티를 기준으로 관계를 가진다
구조적 타입 시스템으로 인해 Animal처럼 name,color가 들어가있는 객체는
Animal타입에 들어갈 수 있다
*/


type Book = { //슈퍼타입
  name: string;
  price: number;
}

type ProgrammingBook = { //서브타입
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactJS"
}

book = programmingBook; //업캐스팅
programmingBook = book; //다운캐스팅

let book2: Book = {
  name: "한입크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactJS" //초과프로퍼티 검사로 인해서 오류 
}

let book3: Book = programmingBook;

function func(book:Book){}

func({
  name: "한입크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactJS" //초과프로퍼티 검사로 인해서 오류 
})