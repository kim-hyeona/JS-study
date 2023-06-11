// 자료형

/* 
  자료형과 원시 자료형

  자바스크립트는 자료형을 크게는 원시 또는 객체 자료형으로 나누고, 작게는 8개의 세부 자료형으로 나눕니다.
*/

/***** 숫자형 *****/

let num = 8;

let age = 25;

let minus = -5;

let tall = 162.3;

/* 
  자바나 c언어가 정수와 소수를 각각 다른 자료형으로 구분하는것과 달리
  자바스크립트는 모든 종류의 숫자를 숫자형 하나로 처리한다.
  자바스크립트 숫자형은 덧셈 뺄셈 곱셉 나눗셈의 사칙연산을 수행한다
*/

// 숫자형에는 정수,실수 말고도 일반적이지 않은 몇 가지 값이 있는데

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // Not a Number 숫자가 아님

/* 
  자바나 C언어에서는 0으로 어떤 수를 나누면 오류가 발생하지만
  자바스크립트는 Infinity라는 결과를 얻게 된다

  자바스크립트의 수학 연산이 안정적인 이유는 NaN이라는 값이 있기 때문이다
  수학적으로 불가능한 연산을 하면 자바스크립트는 오류를 일으키거나 프로그램을 멈추는 것이 아닌
  NaN를 출력한다
*/



/***** 문자형 *****/

/* 
  문자형은 사람의 일음과 같은 문자열을 포함하는 자료형
*/

let fullName = "김현아";
let hobby = '그림그리기';
let TextSum = `${fullName}의 취미는${hobby}입니다`

/* 
어떤 값이 문자열이라는걸 알리기 위해서는 큰 따옴표나 작은 따옴표 백틱으로 값을
감싸야한다.
*/



/***** 불리언,null,undefined *****/

let isSwitchOn = false; // false
/* 
  불리언형은 작업을 성공적으로 종료했는지 어떤 값이 있는지 등을 확인할때 유용하게 사용됨
*/

let emptyVar = null; // null
/* 
  null은 "아무것도 없다"라는 뜻으로 변수에 아무런 값도 할당할 필요가 없을 때 사용
*/

let undefinedVar; // undefined
/* 
  c언어나 자바에서는 변수를 생성하고 아무런 값도 할당하지 않으면 null을 갖지만
  자바스크립트에서는 null대신 undefined를 갖게 됩니다.
  
  정상적인 할당이 이루워지지 않았을 때 자동으로 할당되는 데이터로
  자바스크립트 프로그래밍에서 가장 많은 오류를 일으키는 주범이다
*/



/***** 형변환 *****/

/* 
  다른 자료형끼리 연산한다고 가정했을때
  숫자와 문자를 서로 더하는 연산이라면 프로그래밍에서는 숫자를 문자로 변환하고 나서
  문자와 문자를 이어 붙이는 연산을 수행한다

  서로 같은 자료형으로 만드는 작업이 선행되어야 연산이 정상적으로 이루워지기 때문이다.

  어떤 값의 자료형을 다른 자료형으로 변환하는 것을 "형변환"이라고 한다.

  형변환에는 프로그래머가 의도적으로 자료형을 변환하는 "명시적 형 변환"과
  자바스크립트 엔진이 알아서 변환하는 "묵시적 형 변환"이 있습니다.
*/

// 묵시적 형 변환 : 자바스크립트 엔진이 스스로 변환하는 작업

    let number = 10;
    let string = "20";

    const result = number + string;
    console.log(result); //값 1020

// 명시적 형 변환 : 프로그래머가 의도적으로 자료형을 다른 자료형으로 변경하는 작업

    let strA = "10"
    let strB = "10개"

    let numA = Number(strA);
    let numB = Number(strB);

    console.log(numA); // 10
    console.log(numB); // NaN

    /* 
      Number()는 자바스크립트가 기본적으로 제공하는 내장 함수로
      제공된 문자열을 숫자로 변환해 반환합니다 그러나 변수 strB처럼 숫자가 아닌 문자를 포함한
      문자열은 정상적으로 변환되지 않기 때문에 NaN을 반환합니다.
      문자열도 포함된 변수도 숫자로 변환하고 싶다면 parseInt 함수를 사용하면 됩니다.
    */

    let numC = parseInt(strB,10);
    console.log(numC); // 10

    /* 
      함수 parseInt()는 Number()처럼 괄호 안에 있는 문자열을 숫자열로 변환하는 내장함수이다
      Number()와 달리 괄호안에 두개의 값을 콤마로 구분해 전달하는데
      첫번째 값은 변환하려는 문자열이고, 두번째 값은 진수입니다.

      함수 parseInt()는 문자열에서 숫자만 추려 반환하기때문에 문자와 숫자가 섞여있는 문자열도
      숫자로 반환 할 수 있다. 단 동작할때는 문자열의 첫 문자부터 숫자로 변환하므로
      문자열이 숫자가 아닌 문자로 시작한다면 NaN를 반환합니다
    */
    
    let str = "개발자들 파이팅~!";
    let numD = parseInt(str,10)
  
    console.log(numD); //NaN


  // 숫자에서 문자열로 변환

    let year = 2023;
    let str2 = String(num);

    console.log(str2); // "2022"

    /* 
      문자열로 형 변환을 하는 것은 대체로 예측할 수 있는 방식으로 일어납니다.
      undefined값은 문자열 undefined / null값은 문자열 null / true값은 문자열 true로 변환됨
    */
    
    

  // 불리언값으로 변환

  let var1 = "안녕";
  let var2 = 0;
  let var3 = "";

  let boo1 = Boolean(var1);
  let boo2 = Boolean(var2);
  let boo3 = Boolean(var3);

  console.log(boo1); // true
  console.log(boo2); // false
  console.log(boo3); // false

  /* 
    하이라는 문자열은 true
    숫자 0은 false
    빈문자열은 false
  */
  