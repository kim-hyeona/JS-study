/* 
  infer : inference(추론)
*/

type FuncA = () => string;
type FuncB = () => number;

/* type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // string 타입으로 추론
type B = ReturnType<FuncB>; // number 타입이길 바랬지만 never 타입으로 추론

infer문법으로 문제를 해결한다
*/

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // R이 string으로 추론되어 string 타입이 됨
type B = ReturnType<FuncB>; // R이 number으로 추론되어 number 타입이 됨

type C = ReturnType<number>; // number가 () => infer R의 슈퍼타입이 될 수없어서 never타입이 됨
// infer 다음에 오는 타입을 추론할 수 없는 경우는 조건식이 거짓이 된다


// 예제

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이여야한다
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.


type PromisA = PromiseUnpack<Promise<number>>;
//number

type PromisB = PromiseUnpack<Promise<string>>;
//string