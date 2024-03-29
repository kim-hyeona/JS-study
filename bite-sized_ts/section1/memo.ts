// 타입스크립트 = 자바스크립트의 확장판
//자바스크립트를 더 안전하게 사용할 수 있도록 "타입 관련 기능을 추가한 언어"

// js 
let a = 1;
let b = 2;

console.log(a+b)


// ts
let at:number = 1; // :number로 타입지정
let bt:number = 2; // 이제 at 와 bt이라는 변수에는 숫자타입의 데이터만 넣을 수 있다

console.log(at + bt);


/* 
 자바스크립트의 한계

    자바스크립트를 포함하여 모든 프로그래밍 언어는 타입 시스템을 가지고 있다
    
    타입시스템이란?: 값들을 어떤 기준으로 묶어 타입을 규정할 것인가?
                     코드의 타입을 언제 검사할지?
                     어떻게 타입을 검사할지?
                         => 언어의 타입 관련된 문법 체계
                     
    타입시스템 종류
        => 정적 타입 시스템
            :코드 실행 이전 모든 변수의 타입을 고정적으로 결정함, 엄격하고 고정적 시스템
            ex) C, java

        => 동적 타입 시스템
            :코드를 실행하고 나서 그때그때마다 유동적으로 변수의 타입을 결정함, 자유롭고 유연한 시스템
            ex) python, javaScript
    

자바스크립트는 변수의 타입을 코드가 실행되는 도중에 결정함 즉 변수의 타입을 개발자가 정의하지않음

변수의 타입이 고정되어있지 않으니 아무 타입의 값이나 자유롭게 담을 수 있음
ex) let a = "hello";
    a = 123456



// 타입스크립트의 차별점

정적타입시스템의 변수의 타입을 실행전에 결정 타입 오류를 실행전에 검사하는 기능
그러나 동적타입처럼 타입을 또 일일이 지정할 필요 없는 점진적 타입 시스템
= 실행 전 검사를 통한 타입 안정성 확보 자동으로 변수의 타입을 추론함

*/ 



/* 

타입스크립트 동작 원리

    대다수의 프로그래밍 언어의 동작 원리

        작성된 프로그래밍언어를 기계가 알아들을 수 있는 바이트 코드로
        컴파일러가 바꾸는 과정을 컴파일이라고 한다.

        바로 바이트 코드로 바뀌는 것이 아닌 AST(추상 문법 트리)로 변환한다.

        AST: 코드의 주석 탭등의 코드실행과 관련없는 요소들을 전부제거하고
             트리형태의 자료구조에 코드를 쪼개서 저장해놓은것

        이 AST를 바이트 코드로 변환한다

        코드 => AST => 바이트 코드


    타입스크립트의 동작 원리

    TS => AST => 타입검사(Type Checking)
    타입검사 => 타입오류발견 => 컴파일 종료
    타입검사 => 검사 성공 타입 오류 없음 => AST를 자바스크립트로 변환 => 컴파일 종료

    AST에서 자바스크립트로 변환되는 과정에서는 타입관련된 코드들은 전부 사라지기때문에
    브라우저가 자바스크립트를 읽는데 문제없음

*/


