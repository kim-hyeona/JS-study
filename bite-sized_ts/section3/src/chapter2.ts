
// Unknown 타입
  function UnknownExam(){ //모든 타입의 슈퍼타입 모든타입 업캐스팅 가능
      let a : unknown = 1;
      let b : unknown = "hello";
      let c : unknown = true;
      let d : unknown = null;
      let e : unknown = undefined;
  }


// Never 타입
  function neverExam(){
    function neverFunc():never{
      while (true){}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let boo: boolean = neverFunc(); //업캐스팅
    }


// Void 타입
  function voidExam(){
    function voidFunc(){
      console.log('hi');
    }
    let voidVar: void = undefined;
  }


// any 타입
  function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; //any에서 unknown으로 다운캐스팅 됨
    undefinedVar = anyVar; //undefinde에서 any로 다운캐스팅 됨
    neverVar = anyVar; //never타입은 순수한 공집합이기때문에 다운캐스팅안됨
  }
