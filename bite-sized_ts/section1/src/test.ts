/* console.log("hello test");

const func = () => console.log("hello");

export const hello = (message) => { //"strict": true 로 설정해놨기때문에 오류메세지 출력
    console.log("hello" + message);
};
// 매개변수는 타입이 추론이 안되기때문에 엄격한 검사모드를 설정하면 오류메세지가뜸
 */

/* 
    타입스크립트는 전역모듈이기때문에 다른 파일이라도
    같은 변수명을 사용하면 에러메세지가 뜬다

    1. 첫번째 방법 export {};
    : export나 import같은 모듈 시스템을 사용하는 문법키워드를
    파일 내부에 한번 이상 작성하면 그때부터 독립적인 파일이 된다
    격리된 모듈로 바라본다는 얘기이다.
    
    2. 두번째 방법 
    tsconfig.json에 moduleDetection": "force"
*/