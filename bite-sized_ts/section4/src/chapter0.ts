/* 
  함수 타입 정의
*/

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a:number, b:number) :number{
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법

const add = (a:number , b:number):number => a + b;


// 함수의 매개변수

function introduce(name = "현아",age: number,tall?: number){ //? <= 선택적 매개변수 만들어놓음
  console.log(`name:${name}`);               // 선택적 매개변수를 사용하려면
  if(typeof tall === 'number'){
    console.log(`tall:${tall + 10}`);
  }
}
/* 
function introduce(name:number = "현아"){ //오류발생
  console.log(`name:${name}`);
}
*/
// introduce(1); 다른 타입의 인수를 전달했으니 오류발생
introduce("현아",25,162);

introduce("현아",25); //선택적 매개변수를 만들어놨기때문에 인수를 하나만 작성해도 오류메세지안뜸


function getSum(...rest : number[]){
    let sum = 0;
    rest.forEach((it)=>sum += it);

    return sum;
}

getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5)