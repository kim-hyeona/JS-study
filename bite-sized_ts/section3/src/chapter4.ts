/**
 대수타입 
 => 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 => 합집합 타입과 교집합 타입이 존재함
**/

import { type } from "os";


// 합집합 타입 Union 타입

let a : string | number | boolean | undefined | null | {};
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1,"hello",true];

/* type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
}; */

// 누가 누군가의 슈퍼타입이거나 서브타입이 아닌 교집합을 가진 타입 두개

type Union1 = Dog | Person

let union1 : Union1 = { //Dog에 해당되는 객체
  name:"",
  color:""
};

let union2 : Union1 = { //Person에 해당되는 객체
  name:"",
  language:""
};

let union3 : Union1 = { //Dog와 Person에 해당되는 객체
  name:"",
  color:"",
  language:""
};

let union4 : Union1 = { // color가 없기에 Dog, language가 없기에 Person도 될 수 없음
  name:"",
};


// 교집합 타입 - Intersection type

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person; // Dog 타입과 Person 타입의 교집합에 포함되어야하기때문에 
                                //두개다 해당하는 객체만 포함될 수 있다

let Intersection1 : Intersection = { // 단 한개라도 프로퍼티가 빠지면 오류메세지
  name: "",
  color:"",
  language:""
}