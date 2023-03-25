/*
자바스크립트는 다이나밍 타이핑을 제공하는 언어로 간편하지만 코드를 길게 짤땐
이점이 큰 단점이 되기 때문에 타입스크립트를 사용
TypeScript는 자료의 타입을 엄격히 검사해줌
정확한 에러메세지
 
터미널에 npm install -g typescript를 적고 설치
tsconfig.json 생성 후 내용 작성
{
  "compilerOptions" : {
    "target": "es6",
    "module": "commonjs",
  }
}

브라우저는 js파일만 읽을 수 있고 ts파일은 읽을 수 없으므로
컴파일을 해야함
터미널에 tsc -w 입력
*/
var 이름 = 'kim'; //이름이란 변수에는 string(문자열) type만 들어올 수 있습니다. 
// 이름 = 1234  <= 오류남
/*
string number boolean null undefined bigint [] {} ...이 들어감
*/
var 성 = ['kim', 'park']; //이 변수엔 string만 담긴 array만 들어올 수 있습니다.
var 과일 = { name: 'apple' };
// ?: name 속성은 옵션이란걸 알려줌 
var 성씨 = 123;
var 문자열 = '굿';
function 함수(x) {
    return x * 2;
}
var john = [123, true]; //array에 쓸 수 있는 tuple타입
var mike = { name: 'kim', age: '5' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
