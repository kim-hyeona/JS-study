/* 
  제네릭 클래스
*/

class List<T> {
    constructor(private list : T[]){}

    push(data: T){
      this.list.push(data);
    }
    pop(){
      return this.list.pop();
    }
    print(){
      console.log(this.list);
      
    }
}

const numberList = new List([1,2,3]);
/* 
new List([1,2,3]);
제네릭 클래스는 제네릭 인터페이스나 제네릭 타입변수와 다르게
클래스의 생성자를 호출할때 생성자의 인수로 전달하는 값을 기준으로
타입변수의 타입을 추론하여 반드시 앞에 타입을 명시하지 않아도 된다
*/
numberList.pop();
numberList.push(4);
numberList.print();


const stringList = new List(['1','2']);
stringList.push('hello')