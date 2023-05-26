// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일 결과가 사라지지 않는다 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["BADUSER"] = 2] = "BADUSER";
})(Role || (Role = {}));
var langs;
(function (langs) {
    langs["korean"] = "ko";
    langs["english"] = "en";
})(langs || (langs = {}));
const user1 = {
    name: "김현아",
    role: Role.ADMIN,
    langs: langs.korean // ko
};
const user2 = {
    name: "이은정",
    role: Role.USER // 1 <= 일반유저
};
const user3 = {
    name: "최재준",
    role: Role.BADUSER // 2 <= 악성유저
};
console.log(user1, user2, user3); // 0,1,2
export {};
