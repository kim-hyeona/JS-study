// any
// 특정 변수의 타입을 우리가 확실히 모를때 어떤 데이터타입이던 담을 수 있음

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// any는 타입검사를 전부 통과하지만 런타임환경에서 에러를 발생시킨다 



// unknown

let unknownVar: unknown
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; //허용안됨
unknown.toUpperCase() //허용안됨

if(typeof unknownVar === "number"){ //타입정제
    num = unknownVar; //허용됨
}

