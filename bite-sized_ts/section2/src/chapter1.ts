/********* typescript의 다섯까지 원시 타입*********/

// numer
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
// :number 타입주석


// string
let str1: string = "hello";
let str2: string = `hello ${num1}`;
let str3: string = 'hello';


// boolean
let bool1: boolean = true;
let bool2: boolean = false;


// null
let null1: null = null;


// undefined
let unde1: undefined = undefined;

/* 
타입스크립트에서 넣을 값 없을때 null넣는 법
    tsconfig.json에 "strictNullChecks": false
*/
let numA: number = null;


/********* 리터럴 타입*********/
// 리터럴 = 값
let numB: 10 = 10; // 이제 numB에는 10밖에 못들어감

let strA: "hello" = "hello";

let boolA: true = true