// 타입 추론

let a = 10; // 타입스크립트는 변수에 타입을 지정해주지않더라도 할당된 값을 보고 자동으로 변수의 값을 추론한다

function func(param){ 
  /* 
  매개변수를 선언할때에는 매개변수의 타입을 직접 정의해주지않으면 
  타입스크립트는 추론할 수 없다
  */
}

let b = "hello";
let c = {
  id: 1,
  name:"김현아",
  profile:{
    nickname: "횬",
  },
  urls: ["https://kimha9.com"]
}

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func2(message = "hello"){ //기본값이 설정된 매개변수도 기본값을 기준으로 타입을 추론한다
  return "hello";
}

let d; // 이런식으로 초기화 값을 지정하지 않으면 암묵적 any타입으로 추론됨
d = 10; //
d.toFixed() // 다음줄에서도 숫자타입으로 추론해서 toFixed와 같은 숫자타입에만 쓸 수 있는 메서드 사용가능
d.toUpperCase() //문자열에만 사용가능한 메서드는 사용 불가능

d = "hello";  // 이줄에서 변수 d는 string으로 인식이 되지만 윗줄에 있는 d는 여전히 숫자타입으로 정의된다
d.toFixed()
d.toUpperCase()
// any 타입의 진화 명시적으로 :any 타입을 지정해주는것과 동작이 다름


const num = 10; //넘버 리터럴 타입 10으로 추론이 됨
const str = "hello" //

let arr = [1,"string"] //(number | string) 유니언 타입

//const로 선언된 상수가 아니라면 좀 더 범용적으로 변수를 사용할 수 있도록 타입 넓히기를 통해 추론해준다
