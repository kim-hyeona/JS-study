// 연산자
/* 
  연산자란 +, -, *, / 등과 같이 프로그래밍 언어에서 다양한 연산을 수행할 때 사용
  기본 사칙연산 외에도 여러형태의 연산을 수행할 수 있도록 다양한 연상자를 제공
*/



// 대입 연산자
/* 
  대입연산자 =는 가장 기본이 되는 연산자로써 변수에 값을 할당하는 역할을 한다.
*/

let number = 1;



// 산술 연산자
/* 
  산술 연산자는 덧셈 뺄셈 나눗셈 나머지연산처럼 프로그래밍에 가장 기본적인 기능을 수행한다
*/

let numberA = 1;
let numberB = 2;

console.log(numberA + numberB); // 3
console.log(numberA - numberB); // -1
console.log(numberA * numberB); // 2
console.log(numberA / numberB); // 0.5
console.log(numberA % numberB); // 1

/* 
  산술 연산자는 곱셈, 나눗셈, 나머지 연산자가 덧셈, 뺄셈 연산자보다 우선순위기 높다
  만일 연산자가 동일한 우선순위를 가질때는 왼쪽에서 오른쪽으로 차례대로 계산한다
*/

let numberC = 1 + 2 * 10;

console.log(numberC); //21



// 복합 대입 연산자
/* 
  복합대입연산자는 대입연산자와 산술연산자의 기능을 함꼐 이용할때 사용
  복합 대입 연산자를 사용하지 않고 값이 이미 들어있는 어떤 변수에 10을 더하고 싶을땐
  아래와 같은 코드로 작성
*/

let number1 = 10;
number1 = number + 10;

console.log(number1); //20


// 복합대입 연산자로 동일한 코드를 간결하게 작성

let number2 = 10;
number2 += 10;

console.log(number2); //20


// 복합대입 연산자는 모든 산술 연산자와 함께 사용할 수 있다

let number3 = 10;

number3 += 10;
console.log(number3); //20

number3 -= 10;
console.log(number3); //10

number3 *= 10;
console.log(number3); //100

number3 /= 10;
console.log(number3); //10

number3 %= 10;
console.log(number3); //0


// 증감연산자
/* 
  값을 1씩 늘리거나 줄일 때 사용하는 연산자
*/
let a = 1;
a++;
console.log(a); //2

let b = 1;
b--;
console.log(b); //0

/* 
 a++ 처럼 증감연산자를 변수 뒤에 두면 증감 연산의 결과는 연산자가 있는 다음 행부터 반영됩니다
*/
let c = 1;
console.log(c++); //1
console.log(c); //2 <= 다음행부터 반영

let d = 1;
console.log(++d); //2
console.log(d); //2

let e = 1;
console.log(--e); //0
console.log(e); //0



// 논리연산자
/* 
  논리연산자 참과 거짓을 포함하는 불리언 값을 다룰 때 사용하는 연산자 입니다
  OR === ||    : 둘 중 하나라도 참이면 참
  AND === &&   : 둘 중 하나라도 거짓이면 거짓
  NOT === !    : 참이면 거짓, 거짓이면 참
*/


// OR 연산자 : 연산에 참여하는 피연사 중에 하나라도 참이면 참을 반환
let or1 = true;
let or2 = false;

console.log(or1 || or2); //true


// AND 연산자 : 연산에 참여하는 피연사 중에 하나라도 거짓이면 거짓을 반환
let and1 = true;
let and2 = false;

console.log(and1 && and2); //false


// NOT 연산자 : 피연산자가 하나뿐인 연산자로 값이 거짓이면 참 참이면 거짓으로 바꾸워 반환
let not1 = true;
let not2 = false;

console.log(!not1); // false
console.log(!not2); // true




// 비교연산자


// - 같다
/* 
  두 값을 비교하는 연산자
  === 없다
  !== 같지않다
  > 크다
  >= 크거나 같다
  < 작다
  <= 작거나 같다
*/

let num = 2;
let num2 = 2;
let num3 = '2';

console.log(num === num2); // true
console.log(num2 === num3); // false

/* 
  자바 파이썬 c와 다르게 자바스크립트는 값이 동등한지 비교할때 ===연산자를 쓴다
  자바스크립트도 == 연산자를 쓸 수 있지만 ===는 값 뿐만 아니라 자료형태까지 비교하기때문이다
*/

console.log(num === num2); //true
console.log(num2 === num3); //false


// 같지않다
/* 
  자바스크립트에서 두 값이 다른지 비교할때는 !== 연산자를 사용한다
  !== 연산자는 값과 자료형 중 하나라도 다르면 참으로 판단하지만
  != 연산자는 자료형은 비교하지 않고 값이 다르면 참으로 판단한다
*/

console.log(num !== num2); //false
console.log(num2 !== num3); //true
console.log(num2 !== num3); //false


// 대소비교
let num4 = 1;
let num5 = 2;
let num6 = 3;

console.log(num4 < num5); //true
console.log(num5 > num6); //false

console.log('...');

console.log(num4 <= num5); //true
console.log(num5 >= num6); //false



// null 병합 연산자
/* 
  null 병합 연산자는 값이 확정된 변수를 찾을때 사용
  자바스크립트에서 값이 없음을 나타내는 자료형으로 null과 nudefined가 있는데
  이들이 있는 변수를 값이 확정되지 않는 변수라고 한다
  null 병합 연산자 ??를 사용하면 값이 확정된 변수를 쉽게 찾아낼 수 있다.
*/

let varA = 10;
let varB = 20;
let varC;

console.log(varA ?? varB); // 10 :null 병합 연산자는 연산자 기준 왼쪽 값을 기준으로 결과를 반환한다
console.log(varC ?? varB); // 20 :varB의 값은 20 varC의 값을 할당하지 않아 undefined값을 찾는데 이때는 값이 확정된 변수를 반환한다

/* 
  실무에서 null 병합 연산자를 이용하면 다음과 같은 상황을 해결할 수 있다
  요구사항: 변수 user에 해당 사용자의 이름이 있다면 이름을, 이름이 없다면 닉네임을 저장하시오
*/

let name;
let nickname = "횬";

let user = name ?? nickname;

console.log(user); // 횬

// name에 이름이 할당되어있다면 왼쪽의 값을 결과로 반환하기에 변수 name의 값이 출력됨



// 동적 타이핑과 typeof 연산자
/* 
  동적 타이핑: 자바스크립트에서는 변수에 숫자를 저장했다가 문자로 바뀌어도 오류가 발생하지 않는다
  자스 변수는 값을 저장할 때마다 자료형이 동적으로 결정되기 때문이다

  변수에 숫자를 저장했다면 해당 변수는 숫자 자료형이 되고 이후 문자를 저장하면 문자 자료형으로 바뀐다.

  저장하는 변숫값에 따라 변수의 자료형도 함께 변경되는 특징을 동적 타이핑이라고 한다

  이러한 특성때문에 프로그래머가 변수의 자료형이 변경되었다는 사실을 모르고 코드를 작성하게 된다면
  의도치않게 프로그램이 동작하거나 오류가 발생한다.
*/
let var1 = 1;
var1 = '김현아'

console.log(typeof var1); // string



// 삼항 조건 연산자
/* 
  삼항 조건 연산자는 자바스크립트에서 유일하게 3개의 피연산자를 취하는 연산자이다
  삼하나 연산자는 ? 앞에 조건식을 작성하고 
  콜론을 기준으로 앞은 조건식이 참일때 그리고 뒤는 거짓일때 수행할 명령을 작성하면 된다
*/

// 조건식 ? true일때 명령 수행 : false일때 명령 수행

const var2 = '안녕하세요';

typeof var2 === 'string' ? console.log("이 변수는 문자형") : console.log('이 변수는 아님ㅋ');
// "이 변수는 문자형"


// 삼항 연산자를 이용해 값이 홀수인지 짝수인지 판별하는 예시
let numVar = 1;

numVar % 2 === 0 ? console.log('짝수') : console.log('홀수'); // 홀수












