/*********배열과 튜플*********/

// 배열
let numArr:number[] = [1, 2, 3];

let strArr:string[] = ["hello","im","developer"];

let boolArr:Array<boolean> = [true, false, true]; //제네릭문법


// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number | string)[] = [1,"hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][] = [
    [1,2,3],
    [4,5],
];


// 튜플: 길이와 타입이 고정된 배열
let tup1:[number,number] = [1,2];

let tup2:[number,string,boolean] = [1, "2", true];

/* 
튜플도 자바스크립트의 배열로 인식하기때문에 튜플형태로 되어있는 배열이라도 
push()나 pop()같은 메서드로 배열을 조작해도 오류메세지가 뜨지 않기때문에 꼭 주의해야한다
*/


// 튜플은 언제 사용해야 유용한가

const users : [string,number][] = [ //2차원배열
    ["이유나",1],
    ["김수연",2],
    ["박예솔",3],
    ["나하늘",4],
    // [5,"김현아"], 오류메세지 출력
]