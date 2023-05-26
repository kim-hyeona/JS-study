// void: 공허 => 아무것도 없음을 의미하는 타입

import { blob } from "stream/consumers";

function func1():string {
    return "hello";
}

function func2(): void { //undefined나 null값은 오류를 발생시키기때문에 리턴값이 없는 함수는 void로 지정한다 
    console.log('hello') 
    // undefined나 null을 담고 싶으면 return null; return undefined; 를 추가로 작성해야한다
}
    
let a: void;
/* a = 1;
a = "hello"
a = {}; */
a = undefined; //오로지 void로 지정된 변수는 undefined만 담을 수 있다
// 그러나 tsconfig.json에서 stricNullCheck:false로 설정하면 다른 타입도 담을 수 있다.


// never: 존재하지 않는 =>불가능한 타입

function func3(): never { //절대로 정상적으로 종료될 수 없어서 반환값이 나올 수 없을때
    while(true){}
}

function func4(): never{
    throw new Error();
}

/* let b: never;
b = 1;
b = {};
b = "";
b = undefined;
b = null;
b = anyVar

never는 절대 아무런 값도 담을 수 없다
*/
 