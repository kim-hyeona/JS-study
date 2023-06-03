/* 
  접근제어자
  access modifier
  => pubic private proteced
  객체지향 프로그래밍을 할때 중요한 문법 
  객체지향 프로그래밍에선 클래스 문법으로 만든 객체의 프로퍼티를 외부에서 수정할 수 없게
  은닉화하는것이 일반적이다
*/

class Employee {
  // 필드
  name: string;
  protected age: number; //파생클래스에서 허용하고 싶을땐 private가 아니라 protected를 쓴다
  private position: string; //속성에 private를 설정해주면 Employee 클래스 내에서만 엑세스가능함

  // 생성자
  constructor( private name: string, /*매개변수 앞에도 접근제어 설정가능 그러나 이런경우에는 필드값을 제거해야됨 */age: number, position: string){
    this.name = name; 
    this.age = age;
    this.position = position;
  }

  // 메서드
  work(){
    console.log('일함');
    console.log(`${this.position}일하는 중`);
    /* 
      이런식으로 메서드 안에서만 사용해야한다고 가정했을땐
      private을 설정해놓는다 
    */
  }
}

class ExecutiveOfficer extends Employee {
  // 빌드
  officeNumber : number;
  
  //생성자
  constructor(name:string, age:number, position:string, officeNumber:number){
    super(name,age,position); //타입스크립트에서는 super 생략 불가능 파생 클래스의 생성자는 super호출을 포함해야됨
    this.officeNumber = officeNumber;
  }
  // 메서드
  func(){
    this.position; //private를 설정해놓으면 상속이 안된다
    this.age; //protected는 외부에선 오류메세지가 뜨지만 상속된다
  }
}

const employee = new Employee('김현아',25,'개발자') ;
// 이렇게 생성된 인스턴스는 객체이기때문에 점표기법으로 객체의 프로퍼티에 접근해 수정할 수 있따
employee.age = 15
employee.position = '학생'


console.log(employee);

