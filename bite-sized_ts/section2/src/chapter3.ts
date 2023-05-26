/*********객체*********/

// object
let user:{
    id:number,//구조적 타입 시스템
    name:string; //Property Based TS
} = {
    id:1,
    name:"김현아", //객체 리터럴타입
};


let dog:{
    name:string,
    color:string;
} = {
    name:"잭슨",
    color:"white"
};

let config: {
    readonly apiKey: string; //readonly 읽기 전용 프로퍼티
} = {
    apiKey:"My api key"
};

// config.apiKey = "HACKED" 