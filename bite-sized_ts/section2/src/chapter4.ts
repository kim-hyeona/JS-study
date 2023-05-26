// 타입 별칭

import { type } from "os";

type User = { // 타입별칭을 사용할땐 변수명처럼 같은 스코프내에서 선언되지 않게 한다
    id: number;
    name: string;
    nickname:string;
    birth:string;
    bio:string;
    localtion:string;
};


let user: User = {
    id: 1,
    name: "김현아",
    nickname:"mangsoon",
    birth:"19991113",
    bio:"javascript dev",
    localtion:"오산",
};

let user2: User = {
    id: 2,
    name: "송다혜",
    nickname:"berry",
    birth:"19990423",
    bio:"English Literature",
    localtion:"화성",
};



// 인덱스 시그니처
type CountryCodes = {
    [key : string] : string;
};
let countryCodes:CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKindom: 'uk',
};


type ContryNumberCodes = {
    [key : string]: number;
    Korea : 410;
};
let contryNumberCodes : ContryNumberCodes = {
    Korea : 410,
    UnitedState: 840,
    UnitedKindom: 826,
};