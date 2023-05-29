/* 
  함수 타입의 호환성
  특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단

  1. 반환값의 타입이 호환되는가?
  2. 매개변수의 타입이 호환되는가?
*/

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b; 
// b = a; //다운캐스팅안됨


//  기준 2. 매개변수가 호환되는가
//  2-1. 매개변수의 개수가 같을 때

  type C = (value: number) => void;
  type D = (value: 10) => void;

  let c: C = (value) => {};
  let d: D = (value) => {};

  // c = d; // 매개변수의 기준으로 호환성을 판단할때는 업캐스팅일때 호환이 되지 않는다
  d = c; // 다운캐스팅은 된다.

  type Animal = {
    name: string;
  }

  type Dog = {
    name: string;
    color: string;
  }

  let animalFunc = (animal: Animal) => {
    console.log(animal.name)
  };
  let dogFunc = (dog:Dog) =>{
    console.log(dog.name);
    console.log(dog.color);
  };

  // animalFunc = dogFunc;

  let testFunc = (animal:Animal)=>{
      console.log(animal.name);
      console.log(animal.color); //이런 말도 안되는 코드가 나올 수 있는걸 방지해서 업캐스팅이되는걸 막는것이다
  }

  /* 
  함수 a와 함수 b가 있다고 가정했을때 매개변수를 기준으로 호환성을 판단한다고 한다면
  b 타입을 a 타입으로 취급하려고 한다면 a의 매개변수의 타입이 슈퍼타입이고 b의 매개변수 타입이 서브타입일때 업캐스팅임으로 허용되지않는다
  */




//  2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1 : Func1 = (a, b) => {};
let func2 : Func2 = (a) => {};

func1 = func2; // 매개변수가 많은 쪽이 슈퍼타입이 된다면 허용
func2 = func1;

// 매개변수의 타입이 같을 때 한정