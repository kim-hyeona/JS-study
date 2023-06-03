/* 
  인터페이스와 클래스
*/

interface CharecterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Charecter implements CharecterInterface {
//캐릭터클래스는 캐릭터 인터페이스를 구현한다.

    constructor(
      public name: string,
      public moveSpeed: number,
      private extra: string
      ){}

    move(): void {
      console.log(`${this.moveSpeed} 속도로 이동`);
      
    }
}

/* 
  라이브러리의 구현이나 복잡하고 정교한 프로그래밍을 해야하는 상황에
  인터페이스를 이용해서 설계도를 구현할때 많이 사용한다
*/