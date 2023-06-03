/* 
  클래스
*/

let studentA = {
  name:"이은정",
  grade:"a+",
  age:27,
  study(){
    console.log("열심히 공부 함")
  },
  introduce(){
    console.log('안녕히계세요!');
  }
};

class Student { // 클래스 이름은 앞글자를 대문자로 짓는 파스칼표기법
  //필드
  name;
  grade;
  age;

  // 생성자
  constructor(name,grade,age){ //constructor메서드를 쓰면 그냥 생성자가 됨
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study(){
    console.log("열심히 공부 함")
  } //매서드는 세미콜론없이 작성
  introduce(){
    console.log(`안녕히하세요! ${this.name}입니다`);
    // this를 메서드 안에서 이용하면 현재의 객체에 프로퍼티의 값들을 가져와서 출력가능
  }
}

class StudentDevloper extends Student{
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name,grade,age,favoriteSkill){
      super(name,grade,age);
      this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming(){
      console.log(`${this.favoriteSkill}가 주 스킬입니다.`);
      
    }
}

const studentDevloper = new StudentDevloper('김현아','O',25,"React");
console.log(StudentDevloper);
studentDevloper.programming();

// 클래스를 이용해서 만든 객체 => 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('김현아',"A+",25);

console.log(studentB);
studentB.study();
studentB.introduce();