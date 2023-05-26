/********* typescript의 다섯까지 원시 타입*********/
// numer
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// :number 타입주석
// string
let str1 = "hello";
let str2 = `hello ${num1}`;
let str3 = 'hello';
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
/*
타입스크립트에서 넣을 값 없을때 null넣는 법
    tsconfig.json에 "strictNullChecks": false
*/
let numA = null;
/********* 리터럴 타입*********/
// 리터럴 = 값
let numB = 10; // 이제 numB에는 10밖에 못들어감
let strA = "hello";
let boolA = true;
export {};
