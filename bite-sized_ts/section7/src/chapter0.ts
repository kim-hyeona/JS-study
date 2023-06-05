/* 
  제네릭
  : 일반적인 포괄적인
  모든 타입의 두루두루쓰는 함수
*/

// 제네릭 함수
function func<T>/*타입변수*/(value: T): T{ 
    return value; //
}

let num = func(10); /* let num:any 함수의 반환값 타입은 해당 함수의 return값을 기준으로 정해짐*/

let bool = func(true); /* let bool:any */

let str = func("string"); /* let str:any */

// let arr = func([1,2,3] as [number,number,number]);
let arr = func<[number,number,number]>([1,2,3]);