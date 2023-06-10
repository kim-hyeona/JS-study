/* 
  조건부 타입
*/

import { rm } from "fs";

type A = number extends string ? string : number;
// 타입 a는 넘버타입이 스트링 타입을 확장하는 문법이냐고 물어본다
// 참이면 string 거짓이면 number

type ObjA = {
    a : number
}

type ObjB = {
    a : number;
    b : number;
}

type B = ObjB extends ObjA ? number : string;



// 제네릭과 조건부타입

type stringNumberSwitch<T> = T extends number ? string : number;

let varA : stringNumberSwitch<number>

let varB : stringNumberSwitch<string>

function removeSpaces<T>(text: T) : T extends string ? string : undefined
function removeSpaces<T>(text:any){
    if(typeof text === "string") {
      return text.replaceAll(" ","");
    }else {
        return undefined
    }
}

let result = removeSpaces("프론트엔드 개발자 김현아 입니다");
result.toUpperCase();

let result2 = removeSpaces(undefined);