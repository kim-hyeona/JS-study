console.log("hello typescrirt");
const a: number = 1;

/*
HELLO TS WORLD!
npm init // 노드 초기화 package.json 생성
npm i @types/node // package.json에 "@types/node" 추가됨 node.js의 내장기능들의 대한 타입정보를 제공하는 types node
npm install typescript -g // 타입스크립트 패키지 
tsc -v // 잘설치됐는지 확인 버전이 뜸
tsc src/index.ts //컴파일 명령
node src/index.js //컴파일된 자바스크립트 실행
tsc src/index.ts
npm install ts-node -g 
ts-node src/index.ts // 타입스크립트 한방에 실행
*/


/* 
컴파일러 옵션
    :얼마나 엄격하게 타입오류를 검사할지 자스코드의 버전은
    어떻게 할지 ...

    tsc --init //초기화
    
*/

import { hello } from "./test";
hello()