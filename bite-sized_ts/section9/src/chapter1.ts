/* 
  분산적인 조건부 타입
*/

type StringNumberSwitch<T> = T extends number ? string : number;

/* 
분산이 이루워지지 않게 하기
type StringNumberSwitch<T> = [T] extends [number] ? string : number; 

*/

let a : StringNumberSwitch<number>; // a: string

let b: StringNumberSwitch<string>; // b: number

let c: StringNumberSwitch<number | string>; //c: string | number
/* 
타입변수에 유니온 타입을 할당하게 되면 유니온타입이 그대로 T변수에 들어가는게 아니라
한번은 넘버 한번은 스트링으로 분리되어서 들어간다

유니온 타입을 타입변수에 전달한다는 것은
let c: StringNumberSwitch<number> | let c: StringNumberSwitch<string>
값 string | number
따로따로 할당된 상태로 유니온으로 묶이는 것이다
 */


let d: StringNumberSwitch<boolean | number | string>;
/* 
    1 단계
    StringNumberSwitch<boolean> |
    StringNumberSwitch<number> |
    StringNumberSwitch<string> |
*/ 

/* 
    2 단계
    number | string | number
*/

/* 
    결과
    number | string
*/



// 실용 예제

type Exclude<T, U> = T extends U ? never : T;
// 타입 변수 T가 타입변수 U의 서버타입이라면 never 아니라면 T

type A = Exclude<number | string | boolean , string>;
/* 
  1단계
  Exclude<number, string> |
  Exclude<string, string> |
  Exclude<boolean, string> 
*/

/* 
  2단계
  number | never | boolean
*/

/* 
  결과
   number | boolean

   유니온은 타입들간의 합집합을 만드는것이므로 공집합 타입인 never가
   결과에 포함되어있으면 제외된다
*/


type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

/* 
  1 단계
  Extract<number, string> |
  Extract<string, string> |
  Extract<boolean, string>
*/

/* 
  2 단계
  never | string | never
*/

/* 
  최종결과
  string
*/