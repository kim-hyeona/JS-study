// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일 결과가 사라지지 않고 객체형태로 나타난다

import { userInfo } from "os"

enum Role {
    ADMIN, // 만약 처번째 enum을 ADMIN = 10으로 설정해놓으면 
    USER, // 자동으로 11
    BADUSER, // 자동으로 12가 된다
}

enum langs {
    korean ="ko",
    english ="en"
}

const user1 = {
    name:"김현아",
    role:Role.ADMIN, // 0 <= 관리자
    langs:langs.korean // ko
}
const user2 = {
    name:"이은정",
    role:Role.USER // 1 <= 일반유저
}
const user3 = {
    name:"최재준",
    role:Role.BADUSER // 2 <= 악성유저
}

console.log(user1,user2,user3) // 0,1,2