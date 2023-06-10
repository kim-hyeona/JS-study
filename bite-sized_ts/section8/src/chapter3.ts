/* 
  맵드 타입
*/

// 맵드타입은 인터페이스에서 사용할 수 없고 타입별칭으로 사용해야한다


interface User {
  id: number;
  name: string;
  age: number;
}

type PartiaUser = { //[key in 'id' | 'name' | 'age']:  대괄호 안은 객체의 프로퍼티 키가 무엇이 될 수 있는지 정의하는곳
  [key in 'id' | 'name' | 'age']?: User[key]; //User[key]; 프로퍼티의 키들이 어떤 value타입을 가질것인지 정의
}//key가 id일수도 name일수도 age일수도 있다를 의미한다

type BolleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key]
};

// 한명의 유저정보를 불러오는 기능
function fetchUser():User{
    // ... 기능
    return {
      id:1,
      name:"김현아",
      age: 25,
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartiaUser){
    // ... 수정하는 기능
}

updateUser({
    id: 1,
    name:"김현아",
    age:25,
});

