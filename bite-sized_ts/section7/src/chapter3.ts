/* 
  제네릭 인터페이스
*/

import { it } from "node:test";

interface KeyPair<k,v> { //타입변수는 타입 파라미터 / 제네릭 타입 변수 / 제네릭 타입 파라미터라고 부르는 경우도 있다
    key : k;
    value: v;
}

let KeyPair : KeyPair<string,number> = { //타입변수에 할당할 타입을 꺽새와 함께 사용해야한다
    key:"key",
    value:0,
}

let keyPair2: KeyPair<boolean,string[]> = {
  key: true,
  value: ['1'],
}


/* 
  인덱스 시그니처
*/

interface NumberMap {
    [key: string]: number;
}

let NumberMap1: NumberMap = {
  key: -213,
  key2: 156,
};

interface Map <v>{
    [key: string]: v;
}

let stringMap: Map<string> = {
    key:"value",
};

let booleanMap: Map<boolean> = {
   key: true,
}


/* 
  제네릭 타입 별칭
*/

type Map2<v> = {
    [key: string]:v;
};

let stringMap2: Map2<string> = {
    key: "hello",
}



/* 
  제네릭 인터페이스 예제
  => 유저 관리 프로그램
  => 유저 구분: 학생 유저 / 개발자 유저
*/

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T
}

function goToSchool(user: User<Student>){
    const school = user.profile.school;
    console.log(`${school}로 등교 완`);  
}

const developerUser : User<Developer> = {
    name: "김현아",
    profile: {
      type:"developer",
      skill:"TypeScript",
    },
};


const studentUser : User<Student> = {
    name:"송다혜",
    profile:{
      type:"student",
      school:"갓생대학교",
    }
}