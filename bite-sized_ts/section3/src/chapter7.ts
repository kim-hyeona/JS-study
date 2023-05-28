/* 
  타입 좁히기
  조건문 등을 이용해 넓은 타입에서 좁은 타입으로
  타입을 상황에 따라 좁히는 방법을 이야기
*/

type Person = {
  name: string;
  age: number;
} 


// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person: name은 age살입니다.
function func(value: number | string | Date | null | Person){
  if(typeof value === 'number'){ // 이 조건문안에서 value라는 변수는 number타입으로 보장이 된다 
    console.log(value.toFixed()); //typeof 타입가드
  } else if(typeof value === 'string'){// 이 조건문안에서 value라는 변수는 string타입으로 보장이 된다
    console.log(value.toLocaleUpperCase());
  } else if(value instanceof Date){ // instanceof 왼쪽에 value값이 Date객체냐고 물어보는 객체지향문법
    console.log(value.getTime());
  }else if(value && 'age' in value) { //in 연산자 뒤에는 null이나 nudefined를 입력하면 안됨
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  } 
} 
